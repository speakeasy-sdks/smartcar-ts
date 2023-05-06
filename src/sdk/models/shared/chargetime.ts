/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class ChargeTime extends SpeakeasyBase {
  /**
   * The date and time the vehicle expects to complete this charging session.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  time?: Date;
}