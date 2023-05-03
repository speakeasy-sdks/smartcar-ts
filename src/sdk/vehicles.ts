/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Operations about vehicles
 */
export class Vehicles {
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
   * Batch
   *
   * @remarks
   * __Description__ Returns a list of responses from multiple Smartcar endpoints, all combined into a single request. Note: Batch requests is a paid feature. Please contact us to upgrade your plan and obtain access.
   */
  async batch(
    req: operations.BatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/batch",
      req,
      this._globals
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.BatchResponse = new operations.BatchResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.batchResponse = utils.objectToClass(
            httpRes?.data,
            shared.BatchResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Revoke Access
   *
   * @remarks
   * __Description__
   *
   * Revoke access for the current requesting application. This is the correct way to disconnect a vehicle.
   *
   * __Response body__
   *
   * |  Name 	|Type   	|Boolean   	|
   * |---	|---	|---	|
   * |  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|
   */
  async disconnect(
    req: operations.DisconnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisconnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisconnectRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/application",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "delete",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DisconnectResponse =
      new operations.DisconnectResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.status = httpRes?.data;
        }
        break;
    }

    return res;
  }

  /**
   * Vehicle Info
   *
   * @remarks
   * __Permission__
   *
   * Returns a single vehicle object, containing identifying information.
   *
   * __Permission__
   *
   * `read_vehicle_info`
   *
   * __Response Body__
   *
   * |Name| Type|Description|
   * |--|--|--|
   * |`id`|string|A vehicle ID (UUID v4).|
   * |`make`|string|The manufacturer of the vehicle.|
   * |`model`|integer|The model of the vehicle.|
   * |`year`|integer|The model year.|
   */
  async get(
    req: operations.GetVehicleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehicleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehicleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}",
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

    const res: operations.GetVehicleResponse =
      new operations.GetVehicleResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.vehicleInfo = utils.objectToClass(
            httpRes?.data,
            shared.VehicleInfo
          );
        }
        break;
    }

    return res;
  }

  /**
   * Engine Oil Life
   *
   * @remarks
   * __Description__
   *
   * Returns the remaining life span of a vehicle’s engine oil.
   *
   * __Permission__
   *
   * `read_engine_oil`
   *
   * __Response body__
   *
   * |  Name 	|Type   	|Boolean   	|
   * |---	|---	|---	|
   * |  `lifeRemaining`|   number|  The engine oil’s remaining life span (as a percentage). Oil life is based on the current quality of the oil. (in percent).|
   */
  async getEngineOil(
    req: operations.GetEngineOilRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEngineOilResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEngineOilRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/engine/oil",
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

    const res: operations.GetEngineOilResponse =
      new operations.GetEngineOilResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.engineOil = utils.objectToClass(httpRes?.data, shared.EngineOil);
        }
        break;
    }

    return res;
  }

  /**
   * Fuel Tank (US Only)
   *
   * @remarks
   * __Description__
   *
   * Returns the status of the fuel remaining in the vehicle’s gas tank. Note: The fuel tank API is only available for vehicles sold in the United States.
   *
   * __Permission__
   *
   * `read_fuel`
   *
   * __Response Body__
   *
   * |Name| Type|Desciprtion|
   * |--|--|--|
   * |`range`|number|The estimated remaining distance the car can travel (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
   * |`percentRemaining`|number|The remaining level of fuel in the tank (in percent).|
   * |`amountRemaining`|number|The amount of fuel in the tank (in liters by default or in gallons (U.S.) using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
   */
  async getFuelTank(
    req: operations.GetFuelTankRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFuelTankResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFuelTankRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/fuel",
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

    const res: operations.GetFuelTankResponse =
      new operations.GetFuelTankResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.fuelTank = utils.objectToClass(httpRes?.data, shared.FuelTank);
        }
        break;
    }

    return res;
  }

  /**
   * Location
   *
   * @remarks
   * __Description__
   *
   * Retrieve latitude and longitude of a vehicle.
   *
   * __Permission__
   *
   * `read_location`
   *
   * __Response Body__
   *
   * |Name| Type|Desciprtion|
   * |--|--|--|
   * |`latitude`|number|The latitude (in degrees).|
   * |`longitude`|number|The longitude (in degrees).|
   */
  async getLocation(
    req: operations.GetLocationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLocationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLocationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/location",
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

    const res: operations.GetLocationResponse =
      new operations.GetLocationResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.location = utils.objectToClass(httpRes?.data, shared.Location);
        }
        break;
    }

    return res;
  }

  /**
   * Odometer
   *
   * @remarks
   * __Description__
   *
   * Returns the vehicle’s last known odometer reading.
   *
   * __Permission__
   *
   * `read_odometer`
   *
   * __Response Body__
   *
   * |Name| Type|Desciprtion|
   * |--|--|--|
   * |`distance`|number|The current odometer of the vehicle (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
   */
  async getOdometer(
    req: operations.GetOdometerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOdometerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOdometerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/odometer",
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

    const res: operations.GetOdometerResponse =
      new operations.GetOdometerResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.odometer = utils.objectToClass(httpRes?.data, shared.Odometer);
        }
        break;
    }

    return res;
  }

  /**
   * Application Permissions
   *
   * @remarks
   * __Description__
   *
   * Returns a list of the permissions that have been granted to your application in relation to this vehicle.
   *
   * __Query Parameters__
   *
   * |Parameter| Type|Required|Description|
   * |--|--|--|--|
   * |`limit`|integer|false|Number of permissions to return (default: 25).|
   * |`offset`|integer|false|A vehicle ID (UUID v4).|Index to start permission list at|
   *
   * __Response Body__
   *
   * |Name| Type|Desciprtion|
   * |--|--|--|
   * |`permissions`|array|An array of permissions.|
   * |`permissions.[]`|string|A permission.|
   * |`paging`|object|Metadata about the current list of elements.|
   * |`paging.count`|integer|The total number of elements for the entire query (not just the given page).|
   * |`paging.offset`|integer|The current start index of the returned list of elements.|
   */
  async getPermissions(
    req: operations.GetPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPermissionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/permissions",
      req,
      this._globals
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req, this._globals);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetPermissionsResponse =
      new operations.GetPermissionsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.permission = utils.objectToClass(
            httpRes?.data,
            shared.Permission
          );
        }
        break;
    }

    return res;
  }

  /**
   * Tire pressure
   *
   * @remarks
   * __Description__
   *
   * Returns the air pressure of each of the vehicle’s tires.
   * __Permission__
   *
   * `read_tires`
   *
   * __Example Response__
   *
   * |Name| Type|Description|
   * |--|--|--|
   * |`frontLeft`|number|The current air pressure of the front left tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
   * |`frontRight`|number|The current air pressure of the front right tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
   * |`backLeft`|number|The current air pressure of the back left tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
   * |`backRight`|number|The current air pressure of the back right tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
   */
  async getTirePressure(
    req: operations.GetTirePressureRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTirePressureResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTirePressureRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/tires/pressure",
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

    const res: operations.GetTirePressureResponse =
      new operations.GetTirePressureResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.tirePressure = utils.objectToClass(
            httpRes?.data,
            shared.TirePressure
          );
        }
        break;
    }

    return res;
  }

  /**
   * Returns the vehicle’s manufacturer identifier.
   *
   * @remarks
   * __Description__
   *
   * Returns the vehicle’s manufacturer identifier.
   */
  async getVin(
    req: operations.GetVinRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVinResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVinRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/vin",
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

    const res: operations.GetVinResponse = new operations.GetVinResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.vinInfo = utils.objectToClass(httpRes?.data, shared.VinInfo);
        }
        break;
    }

    return res;
  }

  /**
   * All Vehicles
   *
   * @remarks
   * __Description__
   *
   * Returns a paged list of all vehicles connected to the application for the current authorized user.
   *
   * __Query Parameters__
   *
   * |Parameter| Type|Required|Description|
   * |--|--|--|--|
   * |`limit`|integer|false|Number of vehicles to return (default: 10).|
   * |`offset`|integer|false|A vehicle ID (UUID v4).|Index to start vehicle list at|
   *
   * __Response Body__
   *
   * |Name| Type|Desciprtion|
   * |--|--|--|
   * |`vehicles`|array|An array of vehicle IDs.|
   * |`vehicles.[]`|string|A vehicle ID (UUID v4).|
   * |`paging`|object|Metadata about the current list of elements.|
   * |`paging.count`|integer|The total number of elements for the entire query (not just the given page).|
   * |`paging.offset`|integer|The current start index of the returned list of elements.|
   */
  async listVehicles(
    req: operations.ListVehiclesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVehiclesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVehiclesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vehicles";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req, this._globals);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListVehiclesResponse =
      new operations.ListVehiclesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.vehiclesResponse = utils.objectToClass(
            httpRes?.data,
            shared.VehiclesResponse
          );
        }
        break;
    }

    return res;
  }

  /**
   * Lock/Unlock Vehicle
   *
   * @remarks
   * __Description__
   *
   * Unlock the vehicle
   *
   * __Permission__
   *
   * `control_security`
   *
   * __Response body__
   *
   * |  Name 	|Type   	|Boolean   	|
   * |---	|---	|---	|
   * |  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|
   */
  async lockUnlock(
    req: operations.LockUnlockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LockUnlockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LockUnlockRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/vehicles/{vehicle_id}/security",
      req,
      this._globals
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "securityAction",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.LockUnlockResponse =
      new operations.LockUnlockResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.successResponse = utils.objectToClass(
            httpRes?.data,
            shared.SuccessResponse
          );
        }
        break;
    }

    return res;
  }
}
