/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/systemTopicsMappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClientContext } from "../eventGridManagementClientContext";

/** Class representing a SystemTopics. */
export class SystemTopics {
  private readonly client: EventGridManagementClientContext;

  /**
   * Create a SystemTopics.
   * @param {EventGridManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventGridManagementClientContext) {
    this.client = client;
  }

  /**
   * Get properties of a system topic.
   * @summary Get a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param [options] The optional parameters
   * @returns Promise<Models.SystemTopicsGetResponse>
   */
  get(resourceGroupName: string, systemTopicName: string, options?: msRest.RequestOptionsBase): Promise<Models.SystemTopicsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param callback The callback
   */
  get(resourceGroupName: string, systemTopicName: string, callback: msRest.ServiceCallback<Models.SystemTopic>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, systemTopicName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SystemTopic>): void;
  get(resourceGroupName: string, systemTopicName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SystemTopic>, callback?: msRest.ServiceCallback<Models.SystemTopic>): Promise<Models.SystemTopicsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        systemTopicName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SystemTopicsGetResponse>;
  }

  /**
   * Asynchronously creates a new system topic with the specified parameters.
   * @summary Create a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicInfo System Topic information.
   * @param [options] The optional parameters
   * @returns Promise<Models.SystemTopicsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, systemTopicName: string, systemTopicInfo: Models.SystemTopic, options?: msRest.RequestOptionsBase): Promise<Models.SystemTopicsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,systemTopicName,systemTopicInfo,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SystemTopicsCreateOrUpdateResponse>;
  }

  /**
   * Delete existing system topic.
   * @summary Delete a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, systemTopicName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,systemTopicName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Asynchronously updates a system topic with the specified parameters.
   * @summary Update a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicUpdateParameters SystemTopic update information.
   * @param [options] The optional parameters
   * @returns Promise<Models.SystemTopicsUpdateResponse>
   */
  update(resourceGroupName: string, systemTopicName: string, systemTopicUpdateParameters: Models.SystemTopicUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.SystemTopicsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,systemTopicName,systemTopicUpdateParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SystemTopicsUpdateResponse>;
  }

  /**
   * List all the system topics under an Azure subscription.
   * @summary List system topics under an Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.SystemTopicsListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.SystemTopicsListBySubscriptionOptionalParams): Promise<Models.SystemTopicsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.SystemTopicsListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.SystemTopicsListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.SystemTopicsListResult>): void;
  listBySubscription(options?: Models.SystemTopicsListBySubscriptionOptionalParams | msRest.ServiceCallback<Models.SystemTopicsListResult>, callback?: msRest.ServiceCallback<Models.SystemTopicsListResult>): Promise<Models.SystemTopicsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.SystemTopicsListBySubscriptionResponse>;
  }

  /**
   * List all the system topics under a resource group.
   * @summary List system topics under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.SystemTopicsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.SystemTopicsListByResourceGroupOptionalParams): Promise<Models.SystemTopicsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.SystemTopicsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.SystemTopicsListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.SystemTopicsListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.SystemTopicsListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.SystemTopicsListResult>, callback?: msRest.ServiceCallback<Models.SystemTopicsListResult>): Promise<Models.SystemTopicsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.SystemTopicsListByResourceGroupResponse>;
  }

  /**
   * Asynchronously creates a new system topic with the specified parameters.
   * @summary Create a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicInfo System Topic information.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, systemTopicName: string, systemTopicInfo: Models.SystemTopic, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        systemTopicName,
        systemTopicInfo,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete existing system topic.
   * @summary Delete a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, systemTopicName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        systemTopicName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Asynchronously updates a system topic with the specified parameters.
   * @summary Update a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicUpdateParameters SystemTopic update information.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, systemTopicName: string, systemTopicUpdateParameters: Models.SystemTopicUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        systemTopicName,
        systemTopicUpdateParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * List all the system topics under an Azure subscription.
   * @summary List system topics under an Azure subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SystemTopicsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SystemTopicsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SystemTopicsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SystemTopicsListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SystemTopicsListResult>, callback?: msRest.ServiceCallback<Models.SystemTopicsListResult>): Promise<Models.SystemTopicsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.SystemTopicsListBySubscriptionNextResponse>;
  }

  /**
   * List all the system topics under a resource group.
   * @summary List system topics under a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SystemTopicsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SystemTopicsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SystemTopicsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SystemTopicsListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SystemTopicsListResult>, callback?: msRest.ServiceCallback<Models.SystemTopicsListResult>): Promise<Models.SystemTopicsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.SystemTopicsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.systemTopicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/systemTopics",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopicsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopicsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.systemTopicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "systemTopicInfo",
    mapper: {
      ...Mappers.SystemTopic,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopic
    },
    201: {
      bodyMapper: Mappers.SystemTopic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.systemTopicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.systemTopicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "systemTopicUpdateParameters",
    mapper: {
      ...Mappers.SystemTopicUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopic
    },
    201: {
      bodyMapper: Mappers.SystemTopic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopicsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SystemTopicsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
