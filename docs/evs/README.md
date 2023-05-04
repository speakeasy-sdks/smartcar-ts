# evs

## Overview

Operations about electric vehicles

### Available Operations

* [getBatteryCapacity](#getbatterycapacity) - EV Battery Capacity
* [getBatteryLevel](#getbatterylevel) - EV Battery Level
* [getChargingLimit](#getcharginglimit) - EV Charging Limit
* [getChargingStatus](#getchargingstatus) - EV Charging Status
* [setChargingLimit](#setcharginglimit) - Set EV Charging Limit
* [startStopCharge](#startstopcharge) - Start or stop charging an electric vehicle. Please contact us to request early access.

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

## getChargingLimit

__Description__

Returns the current charge limit of an electric vehicle.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetChargingLimitResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.evs.getChargingLimit({}).then((res: GetChargingLimitResponse) => {
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

## setChargingLimit

__Description__

Returns the current charge limit of an electric vehicle.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { SetChargingLimitResponse } from "smartcar/dist/sdk/models/operations";
import { SuccessResponseStatusEnum } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.evs.setChargingLimit({
  chargeLimit: {
    limit: 1,
  },
}).then((res: SetChargingLimitResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## startStopCharge

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
import { StartStopChargeResponse } from "smartcar/dist/sdk/models/operations";
import { ChargeActionActionEnum, SuccessResponseStatusEnum } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.evs.startStopCharge({
  chargeAction: {
    action: ChargeActionActionEnum.Start,
  },
}).then((res: StartStopChargeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
