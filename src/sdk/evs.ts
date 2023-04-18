/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Operations about electric vehicles
 */
export class Evs {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * EV Battery Capacity
   *
   * @remarks
   * __Description__
   *
   * Returns the total capacity of an electric vehicle's battery.
   *
   * __Permission__
   *
   * `read_battery`
   *
   * __Response body__
   *
   * |  Name 	|Type   	|Boolean   	|
   * |---	|---	|---	|
   * |  capacity|   number|  The total capacity of the vehicle's battery (in kilowatt-hours). 	|
   */
  getBatteryCapacity(
    req: operations.GetBatteryCapacityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBatteryCapacityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBatteryCapacityRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/battery/capacity",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetBatteryCapacityResponse =
        new operations.GetBatteryCapacityResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * EV Battery Level
   *
   * @remarks
   * __Description__
   *
   * Retrieve EV battery level of a vehicle.
   *
   * __Permission__
   *
   * `read_battery`
   *
   * __Response body__
   *
   * |  Name 	|Type   	|Boolean   	|
   * |---	|---	|---	|
   * |  `percentRemaining`|   number|  An EV battery’s state of charge (in percent). 	|
   * |   `range`|   number	|   The estimated remaining distance the vehicle can travel (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers).	|
   */
  getBatteryLevel(
    req: operations.GetBatteryLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBatteryLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBatteryLevelRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/battery",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetBatteryLevelResponse =
        new operations.GetBatteryLevelResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * EV Charging Status
   *
   * @remarks
   * __Description__
   *
   * Returns the current charge status of an electric vehicle.
   *
   * __Permission__
   *
   * `read_charge`
   *
   * __Response body__
   *
   * |  Name 	|Type   	|Boolean   	|
   * |---	|---	|---	|
   * |  `isPluggedIn` 	|   boolean	|  Indicates whether a charging cable is currently plugged into the vehicle’s charge port. 	|
   * |   `state`	|   string	|   Indicates whether the vehicle is currently charging. Options: `CHARGING` `FULLY_CHARGED` `NOT_CHARGING`	|
   */
  getChargingStatus(
    req: operations.GetChargingStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChargingStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChargingStatusRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/charge",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetChargingStatusResponse =
        new operations.GetChargingStatusResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }
}
