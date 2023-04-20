/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Operations about compatibility
 */
export class Compatibility {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;
  _globals: any;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string,
    globals: any
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
    this._globals = globals;
  }

  /**
   * Compatibility
   *
   * @remarks
   * In the US, compatibility will return a breakdown by scope of what a car is capable of. In Europe, the check is based on the make of the car so will return only a `true` or `false`
   *
   * The Compatibility API lets developers determine whether a given vehicle is compatible with Smartcar and whether it is capable of the features their application requires. Using this endpoint, developers can determine whether specific vehicles are eligible before sending a user through Smartcar Connect.
   *
   * A compatible vehicle is one that:
   * 1. Has the hardware required for internet connectivity
   * 2. Belongs to the makes and models Smartcar is compatible with in the vehicle's country
   *
   * A vehicle is capable of given feature if:
   * 1. The vehicle supports the feature (e.g., a Ford Escape supports /fuel but a Mustang Mach-e does not)
   * 2. Smartcar supports the feature for the vehicle's make
   *
   * Note: The Compatibility API is currently available for vehicles sold in the United States. For other countries, please contact us to request early access. Our initial release for vehicles sold outside of the United States only supports checking compatibility. It does not yet support checking `capabilities`.
   *
   * |  Name 	|Type   	|Boolean   	|
   * |---	|---	|---	|
   * |  compatible|   boolean|  `true` if the vehicle is likely compatible.*, `false` otherwise.|
   * reason|   string \| null|  One of the enum values described below if compatible is `false`, `null` otherwise.|
   * | capabilities|   array| An array containing the set of endpoints that the provided scope value can provide authorization for. This array will be empty if `compatible` is false|
   * | capabilities[].permission|   string|One of the permissions provided in the scope parameter.|
   * | capabilities[].endpoint|   string| One of the endpoints that the permission authorizes access to.|
   * | capabilities[].capable|   boolean|`true` if the vehicle is likely capable of this feature.*, `false` otherwise.|
   * | capabilities[].reason|   string \| null|One of the enum values described below if capable is `false`, `null` otherwise.|
   *
   * __Note__: The compatibility of a vehicle depends on many factors including its make, model, model year, trim, package, and head unit. The Smartcar Compatibility API is optimized to return false positives rather than false negatives.
   *
   * __Enum Values__
   *
   * |  Parameter 	|Value   	|Description   	|
   * |---	|---	|---	|
   * |  reason|   VEHICLE_NOT_COMPATIBLE|  The vehicle does not have the hardware required for internet connectivity.|
   * |  |   MAKE_NOT_COMPATIBLE|  Smartcar is not yet compatible with the vehicle's make in the specified country.|
   * |  capabilities[].reason|   VEHICLE_NOT_CAPABLE|  TThe vehicle does not support this feature.|
   * |  |   SMARTCAR_NOT_CAPABLE|  Smartcar is not capable of supporting the given feature on the vehicle's make.|
   */
  listCompatibility(
    req: operations.ListCompatibilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCompatibilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCompatibilityRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/compatibility";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req, this._globals);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListCompatibilityResponse =
        new operations.ListCompatibilityResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.compatibilityResponse = utils.objectToClass(
              httpRes?.data,
              shared.CompatibilityResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
