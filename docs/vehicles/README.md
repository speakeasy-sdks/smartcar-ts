# vehicles

## Overview

Operations about vehicles

### Available Operations

* [batch](#batch) - Batch
* [disconnect](#disconnect) - Revoke Access
* [get](#get) - Vehicle Info
* [getEngineOil](#getengineoil) - Engine Oil Life
* [getFuelTank](#getfueltank) - Fuel Tank (US Only)
* [getLocation](#getlocation) - Location
* [getOdometer](#getodometer) - Odometer
* [getPermissions](#getpermissions) - Application Permissions
* [getTirePressure](#gettirepressure) - Tire pressure
* [getVin](#getvin) - Returns the vehicle’s manufacturer identifier.
* [listVehicles](#listvehicles) - All Vehicles
* [lockUnlock](#lockunlock) - Lock/Unlock Vehicle

## batch

__Description__ Returns a list of responses from multiple Smartcar endpoints, all combined into a single request. Note: Batch requests is a paid feature. Please contact us to upgrade your plan and obtain access.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { BatchResponse } from "smartcar/dist/sdk/models/operations";
import { ResponseCodeEnum } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.batch("deserunt", [
  "/odometer",
  "/odometer",
]).then((res: BatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## disconnect

__Description__

Revoke access for the current requesting application. This is the correct way to disconnect a vehicle.

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { DisconnectResponse, DisconnectStatusEnum } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.disconnect("iure").then((res: DisconnectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

__Permission__

Returns a single vehicle object, containing identifying information.

__Permission__

`read_vehicle_info`

__Response Body__

|Name| Type|Description|
|--|--|--|
|`id`|string|A vehicle ID (UUID v4).|
|`make`|string|The manufacturer of the vehicle.|
|`model`|integer|The model of the vehicle.|
|`year`|integer|The model year.|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetVehicleResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.get("magnam").then((res: GetVehicleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEngineOil

__Description__

Returns the remaining life span of a vehicle’s engine oil.

__Permission__

`read_engine_oil`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  `lifeRemaining`|   number|  The engine oil’s remaining life span (as a percentage). Oil life is based on the current quality of the oil. (in percent).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetEngineOilResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.getEngineOil("debitis").then((res: GetEngineOilResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getFuelTank

__Description__

Returns the status of the fuel remaining in the vehicle’s gas tank. Note: The fuel tank API is only available for vehicles sold in the United States.

__Permission__

`read_fuel`

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`range`|number|The estimated remaining distance the car can travel (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
|`percentRemaining`|number|The remaining level of fuel in the tank (in percent).|
|`amountRemaining`|number|The amount of fuel in the tank (in liters by default or in gallons (U.S.) using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetFuelTankResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.getFuelTank("ipsa").then((res: GetFuelTankResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getLocation

__Description__

Retrieve latitude and longitude of a vehicle.

__Permission__

`read_location`

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`latitude`|number|The latitude (in degrees).|
|`longitude`|number|The longitude (in degrees).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetLocationResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.getLocation("36ab27d0-fd9d-4455-823a-ce30af709ffc").then((res: GetLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOdometer

__Description__

Returns the vehicle’s last known odometer reading.

__Permission__

`read_odometer`

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`distance`|number|The current odometer of the vehicle (in kilometers by default or in miles using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetOdometerResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.getOdometer("delectus").then((res: GetOdometerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPermissions

__Description__

Returns a list of the permissions that have been granted to your application in relation to this vehicle.

__Query Parameters__

|Parameter| Type|Required|Description|
|--|--|--|--|
|`limit`|integer|false|Number of permissions to return (default: 25).|
|`offset`|integer|false|A vehicle ID (UUID v4).|Index to start permission list at|

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`permissions`|array|An array of permissions.|
|`permissions.[]`|string|A permission.|
|`paging`|object|Metadata about the current list of elements.|
|`paging.count`|integer|The total number of elements for the entire query (not just the given page).|
|`paging.offset`|integer|The current start index of the returned list of elements.|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetPermissionsResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.getPermissions("tempora", 383441, 477665).then((res: GetPermissionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getTirePressure

__Description__

Returns the air pressure of each of the vehicle’s tires.
__Permission__

`read_tires`

__Example Response__

|Name| Type|Description|
|--|--|--|
|`frontLeft`|number|The current air pressure of the front left tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
|`frontRight`|number|The current air pressure of the front right tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
|`backLeft`|number|The current air pressure of the back left tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|
|`backRight`|number|The current air pressure of the back right tire (in kilopascals by default or in pounds per square inch using the [sc-unit-system](https://smartcar.com/docs/api?version=v2.0&language=cURL#request-headers)).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTirePressureResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.getTirePressure("minus").then((res: GetTirePressureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getVin

__Description__

Returns the vehicle’s manufacturer identifier.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetVinResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.getVin("placeat").then((res: GetVinResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listVehicles

__Description__

Returns a paged list of all vehicles connected to the application for the current authorized user.

__Query Parameters__

|Parameter| Type|Required|Description|
|--|--|--|--|
|`limit`|integer|false|Number of vehicles to return (default: 10).|
|`offset`|integer|false|A vehicle ID (UUID v4).|Index to start vehicle list at|

__Response Body__

|Name| Type|Desciprtion|
|--|--|--|
|`vehicles`|array|An array of vehicle IDs.|
|`vehicles.[]`|string|A vehicle ID (UUID v4).|
|`paging`|object|Metadata about the current list of elements.|
|`paging.count`|integer|The total number of elements for the entire query (not just the given page).|
|`paging.offset`|integer|The current start index of the returned list of elements.|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { ListVehiclesResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.listVehicles(528895, 479977).then((res: ListVehiclesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## lockUnlock

__Description__

Unlock the vehicle

__Permission__

`control_security`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { LockUnlockResponse } from "smartcar/dist/sdk/models/operations";
import { SecurityActionActionEnum, SuccessResponseStatusEnum } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.lockUnlock("excepturi", {
  action: SecurityActionActionEnum.Unlock,
}).then((res: LockUnlockResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
