# evs

## Overview

Operations about electric vehicles

### Available Operations

* [getBatteryCapacity](#getbatterycapacity) - EV Battery Capacity
* [getBatteryLevel](#getbatterylevel) - EV Battery Level
* [getChargingStatus](#getchargingstatus) - EV Charging Status

## getBatteryCapacity

__Description__

Returns the total capacity of an electric vehicle's battery.

__Permission__

`read_battery`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  capacity|   number|  The total capacity of the vehicle's battery (in kilowatt-hours). 	|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetBatteryCapacityResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.evs.getBatteryCapacity({}).then((res: GetBatteryCapacityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getBatteryLevel

__Description__

Retrieve EV battery level of a vehicle.

__Permission__

`read_battery`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  `percentRemaining`|   number|  An EV battery’s state of charge (in percent). 	|
|   `range`|   number	|   The estimated remaining distance the vehicle can travel (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers).	|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetBatteryLevelResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.evs.getBatteryLevel({}).then((res: GetBatteryLevelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getChargingStatus

__Description__

Returns the current charge status of an electric vehicle.

__Permission__

`read_charge`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  `isPluggedIn` 	|   boolean	|  Indicates whether a charging cable is currently plugged into the vehicle’s charge port. 	|
|   `state`	|   string	|   Indicates whether the vehicle is currently charging. Options: `CHARGING` `FULLY_CHARGED` `NOT_CHARGING`	|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetChargingStatusResponse } from "smartcar/dist/sdk/models/operations";
import { ChargeStatusStateEnum } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.evs.getChargingStatus({}).then((res: GetChargingStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
