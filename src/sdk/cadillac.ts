/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Cadillac {
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
   * Retrieve charging completion time for a Cadillac.
   *
   * @remarks
   * __Description__
   *
   * When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.
   */
  async getChargeTime(
    req: operations.GetCadillacChargeTimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCadillacChargeTimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCadillacChargeTimeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/cadillac/charge/completion",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetCadillacChargeTimeResponse =
      new operations.GetCadillacChargeTimeResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.chargeTime = utils.objectToClass(
            httpRes?.data,
            shared.ChargeTime
          );
        }
        break;
    }

    return res;
  }

  /**
   * Retrieve charging voltmeter time for a Cadillac.
   *
   * @remarks
   * __Description__
   *
   * When the vehicle is plugged in, this endpoint returns the voltage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.
   */
  async getVoltage(
    req: operations.GetCadillacVoltageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCadillacVoltageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCadillacVoltageRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/cadillac/charge/voltmeter",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetCadillacVoltageResponse =
      new operations.GetCadillacVoltageResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.chargeVoltage = utils.objectToClass(
            httpRes?.data,
            shared.ChargeVoltage
          );
        }
        break;
    }

    return res;
  }
}
