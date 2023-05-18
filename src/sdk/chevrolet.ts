/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Chevrolet {
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
   * Retrieve charging completion time for a Chevrolet.
   *
   * @remarks
   * __Description__
   *
   * When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.
   */
  async getChargeTime(
    vehicleId: string,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChevroletChargeTimeResponse> {
    const req = new operations.GetChevroletChargeTimeRequest({
      vehicleId: vehicleId,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/chevrolet/charge/completion",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetChevroletChargeTimeResponse =
      new operations.GetChevroletChargeTimeResponse({
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
   * Retrieve charging voltmeter time for a Chevrolet.
   *
   * @remarks
   * __Description__
   *
   * When the vehicle is plugged in, this endpoint returns the voltage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.
   */
  async getVoltage(
    vehicleId: string,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChevroletVoltageResponse> {
    const req = new operations.GetChevroletVoltageRequest({
      vehicleId: vehicleId,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/chevrolet/charge/voltmeter",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetChevroletVoltageResponse =
      new operations.GetChevroletVoltageResponse({
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
