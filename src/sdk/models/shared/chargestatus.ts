/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ChargeStatusStateEnum {
  Charging = "CHARGING",
  FullyCharged = "FULLY_CHARGED",
  NotCharging = "NOT_CHARGING",
}

/**
 * return EV Charge reading
 */
export class ChargeStatus extends SpeakeasyBase {
  /**
   * Indicates whether a charging cable is currently plugged into the vehicle’s charge port.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isPluggedIn" })
  isPluggedIn?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: ChargeStatusStateEnum;
}