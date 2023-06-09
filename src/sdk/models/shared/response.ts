/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Header } from "./header";
import { Expose, Type } from "class-transformer";

export enum ResponseCodeEnum {
  TwoHundred = "200",
  FiveHundred = "500",
}

export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: ResponseCodeEnum;

  @SpeakeasyMetadata({ elemType: Header })
  @Expose({ name: "headers" })
  @Type(() => Header)
  headers?: Header[];

  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path?: string;
}
