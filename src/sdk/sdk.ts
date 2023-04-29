/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Compatibility } from "./compatibility";
import { Evs } from "./evs";
import * as shared from "./models/shared";
import { Vehicles } from "./vehicles";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  /**
   * Smartcar API
   */
  "https://api.smartcar.com/v2.0",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows setting the vehicleId parameter for all supported operations
   */
  vehicleId?: string;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * # How do I use Postman with Smartcar?
 *
 * @remarks
 * We've detailed how to get started with Smartcar in Postman [here](https://www.notion.so/smartcarapi/How-do-I-use-Postman-with-Smartcar-b8e8483bae8b43a986715582beb54bd4).
 */
export class Smartcar {
  /**
   * Operations about compatibility
   */
  public compatibility: Compatibility;
  /**
   * Operations about electric vehicles
   */
  public evs: Evs;
  /**
   * Operations about vehicles
   */
  public vehicles: Vehicles;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "2.5.1";
  private _genVersion = "2.23.4";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this._globals = {
      parameters: {
        queryParam: {},
        pathParam: {
          vehicleId: props?.vehicleId,
        },
      },
    };

    this.compatibility = new Compatibility(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.evs = new Evs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.vehicles = new Vehicles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );
  }
}
