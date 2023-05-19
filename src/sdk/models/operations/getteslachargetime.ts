/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTeslaChargeTimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=vehicle_id",
  })
  vehicleId: string;
}

export class GetTeslaChargeTimeResponse extends SpeakeasyBase {
  /**
   * returns the date and time the vehicle expects to "complete" this charging session.
   */
  @SpeakeasyMetadata()
  chargeTime?: shared.ChargeTime;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
