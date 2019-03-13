import { ConnectionPolicy } from "../documents/ConnectionPolicy";
import { CosmosHeaders } from "../queryExecutionContext/CosmosHeaders";
import { RequestContext } from "../request/RequestContext";
import { Constants, OperationType, ResourceType } from "./constants";

/** @hidden */
const Regexes = Constants.RegularExpressions;

/** @hidden */
export function jsonStringifyAndEscapeNonASCII(arg: any) {
  // TODO: better way for this? Not sure.
  // escapes non-ASCII characters as \uXXXX
  return JSON.stringify(arg).replace(/[\u0080-\uFFFF]/g, m => {
    return "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice(-4);
  });
}

export function parseLink(resourcePath: string) {
  if (resourcePath.length === 0) {
    /* for DatabaseAccount case, both type and objectBody will be undefined. */
    return {
      type: undefined,
      objectBody: undefined
    };
  }

  if (resourcePath[resourcePath.length - 1] !== "/") {
    resourcePath = resourcePath + "/";
  }

  if (resourcePath[0] !== "/") {
    resourcePath = "/" + resourcePath;
  }

  /*
         The path will be in the form of /[resourceType]/[resourceId]/ ....
         /[resourceType]//[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId]/
         or /[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId]/[resourceType]/[resourceId]/ ....
          /[resourceType]/[resourceId]/
         The result of split will be in the form of
         [[[resourceType], [resourceId] ... ,[resourceType], [resourceId], ""]
         In the first case, to extract the resourceId it will the element before last ( at length -2 )
         and the type will be before it ( at length -3 )
         In the second case, to extract the resource type it will the element before last ( at length -2 )
        */
  const pathParts = resourcePath.split("/");
  let id;
  let type: ResourceType;
  if (pathParts.length % 2 === 0) {
    // request in form /[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId].
    id = pathParts[pathParts.length - 2];
    type = pathParts[pathParts.length - 3] as ResourceType;
  } else {
    // request in form /[resourceType]/[resourceId]/ .... /[resourceType]/.
    id = pathParts[pathParts.length - 3];
    type = pathParts[pathParts.length - 2] as ResourceType;
  }

  const result = {
    type,
    objectBody: {
      id,
      self: resourcePath
    }
  };

  return result;
}

export function isReadRequest(operationType: OperationType): boolean {
  return operationType === OperationType.Read || operationType === OperationType.Query;
}

export function sleep(time: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function getContainerLink(link: string) {
  return link
    .split("/")
    .slice(0, 4)
    .join("/");
}

export function trimSlashes(source: string) {
  return source
    .replace(Constants.RegularExpressions.TrimLeftSlashes, "")
    .replace(Constants.RegularExpressions.TrimRightSlashes, "");
}

export function getHexaDigit() {
  return Math.floor(Math.random() * 16).toString(16);
}

export function setIsUpsertHeader(headers: CosmosHeaders) {
  if (headers === undefined || headers === null) {
    throw new Error('The "headers" parameter must not be null or undefined');
  }

  if (typeof headers !== "object") {
    throw new Error('The "headers" parameter must be an instance of "Object". Actual type is: "string".');
  }

  headers[Constants.HttpHeaders.IsUpsert] = true;
}

// TODO: replace with well known library?
export function generateGuidId() {
  let id = "";

  for (let i = 0; i < 8; i++) {
    id += getHexaDigit();
  }

  id += "-";

  for (let i = 0; i < 4; i++) {
    id += getHexaDigit();
  }

  id += "-";

  for (let i = 0; i < 4; i++) {
    id += getHexaDigit();
  }

  id += "-";

  for (let i = 0; i < 4; i++) {
    id += getHexaDigit();
  }

  id += "-";

  for (let i = 0; i < 12; i++) {
    id += getHexaDigit();
  }

  return id;
}

export function parsePath(path: string) {
  const pathParts = [];
  let currentIndex = 0;

  const throwError = () => {
    throw new Error("Path " + path + " is invalid at index " + currentIndex);
  };

  const getEscapedToken = () => {
    const quote = path[currentIndex];
    let newIndex = ++currentIndex;

    while (true) {
      newIndex = path.indexOf(quote, newIndex);
      if (newIndex === -1) {
        throwError();
      }

      if (path[newIndex - 1] !== "\\") {
        break;
      }

      ++newIndex;
    }

    const token = path.substr(currentIndex, newIndex - currentIndex);
    currentIndex = newIndex + 1;
    return token;
  };

  const getToken = () => {
    const newIndex = path.indexOf("/", currentIndex);
    let token = null;
    if (newIndex === -1) {
      token = path.substr(currentIndex);
      currentIndex = path.length;
    } else {
      token = path.substr(currentIndex, newIndex - currentIndex);
      currentIndex = newIndex;
    }

    token = token.trim();
    return token;
  };

  while (currentIndex < path.length) {
    if (path[currentIndex] !== "/") {
      throwError();
    }

    if (++currentIndex === path.length) {
      break;
    }

    if (path[currentIndex] === '"' || path[currentIndex] === "'") {
      pathParts.push(getEscapedToken());
    } else {
      pathParts.push(getToken());
    }
  }

  return pathParts;
}
export function isResourceValid(resource: any, err: any) {
  // TODO: any TODO: code smell
  if (resource.id) {
    if (typeof resource.id !== "string") {
      err.message = "Id must be a string.";
      return false;
    }

    if (
      resource.id.indexOf("/") !== -1 ||
      resource.id.indexOf("\\") !== -1 ||
      resource.id.indexOf("?") !== -1 ||
      resource.id.indexOf("#") !== -1
    ) {
      err.message = "Id contains illegal chars.";
      return false;
    }
    if (resource.id[resource.id.length - 1] === " ") {
      err.message = "Id ends with a space.";
      return false;
    }
  }
  return true;
}

/** @ignore */
export function getIdFromLink(resourceLink: string, isNameBased: boolean = true) {
  if (isNameBased) {
    resourceLink = trimSlashes(resourceLink);
    return resourceLink;
  } else {
    return parseLink(resourceLink).objectBody.id.toLowerCase();
  }
}

/** @ignore */
export function getPathFromLink(resourceLink: string, resourceType?: string, isNameBased: boolean = true) {
  if (isNameBased) {
    resourceLink = trimSlashes(resourceLink);
    if (resourceType) {
      return "/" + encodeURI(resourceLink) + "/" + resourceType;
    } else {
      return "/" + encodeURI(resourceLink);
    }
  } else {
    if (resourceType) {
      return "/" + resourceLink + resourceType + "/";
    } else {
      return "/" + resourceLink;
    }
  }
}
export function isStringNullOrEmpty(inputString: string) {
  // checks whether string is null, undefined, empty or only contains space
  return !inputString || /^\s*$/.test(inputString);
}

export function trimSlashFromLeftAndRight(inputString: string) {
  if (typeof inputString !== "string") {
    throw new Error("invalid input: input is not string");
  }

  return inputString.replace(Regexes.TrimLeftSlashes, "").replace(Regexes.TrimRightSlashes, "");
}

export function validateResourceId(resourceId: string) {
  // if resourceId is not a string or is empty throw an error
  if (typeof resourceId !== "string" || isStringNullOrEmpty(resourceId)) {
    throw new Error("Resource Id must be a string and cannot be undefined, null or empty");
  }

  // if resourceId starts or ends with space throw an error
  if (resourceId[resourceId.length - 1] === " ") {
    throw new Error("Resource Id cannot end with space");
  }

  // if resource id contains illegal characters throw an error
  if (Regexes.IllegalResourceIdCharacters.test(resourceId)) {
    throw new Error("Illegal characters ['/', '\\', '?', '#'] cannot be used in resourceId");
  }

  return true;
}

export function getResourceIdFromPath(resourcePath: string) {
  if (!resourcePath || typeof resourcePath !== "string") {
    return null;
  }

  const trimmedPath = trimSlashFromLeftAndRight(resourcePath);
  const pathSegments = trimmedPath.split("/");

  // number of segments of a path must always be even
  if (pathSegments.length % 2 !== 0) {
    return null;
  }

  return pathSegments[pathSegments.length - 1];
}
