/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class VehiclesResponsePaging extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset?: number;
}

/**
 * A list of vehicles
 */
export class VehiclesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "paging" })
  @Type(() => VehiclesResponsePaging)
  paging?: VehiclesResponsePaging;

  @SpeakeasyMetadata()
  @Expose({ name: "vehicles" })
  vehicles?: string[];
}
