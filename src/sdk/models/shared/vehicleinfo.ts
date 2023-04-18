/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A single vehicles
 */
export class VehicleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "make" })
  make: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model: string;

  @SpeakeasyMetadata()
  @Expose({ name: "year" })
  year: number;
}