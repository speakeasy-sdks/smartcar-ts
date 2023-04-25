# vehicles

## Overview

Operations about vehicles

### Available Operations

* [disconnect](#disconnect) - Revoke Access
* [get](#get) - Vehicle Info
* [getEngineOil](#getengineoil) - Engine Oil Life
* [getFuelTank](#getfueltank) - Fuel Tank (US Only)
* [getLocation](#getlocation) - Location
* [getOdometer](#getodometer) - Odometer
* [getPermissions](#getpermissions) - Application Permissions
* [getTirePressure](#gettirepressure) - Tire pressure
* [listVehicles](#listvehicles) - All Vehicles
* [lockUnlock](#lockunlock) - Unlock Vehicle

## disconnect

__Description__

Revoke access for the current requesting application. This is the correct way to disconnect a vehicle.

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { Smartcar } from "SmartCar";
import { DisconnectRequest, DisconnectResponse, DisconnectStatusEnum } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: DisconnectRequest = {};

sdk.vehicles.disconnect(req).then((res: DisconnectResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { GetVehicleRequest, GetVehicleResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetVehicleRequest = {};

sdk.vehicles.get(req).then((res: GetVehicleResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { GetEngineOilRequest, GetEngineOilResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetEngineOilRequest = {};

sdk.vehicles.getEngineOil(req).then((res: GetEngineOilResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { GetFuelTankRequest, GetFuelTankResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetFuelTankRequest = {};

sdk.vehicles.getFuelTank(req).then((res: GetFuelTankResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { GetLocationRequest, GetLocationResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetLocationRequest = {};

sdk.vehicles.getLocation(req).then((res: GetLocationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { GetOdometerRequest, GetOdometerResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetOdometerRequest = {};

sdk.vehicles.getOdometer(req).then((res: GetOdometerResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { GetPermissionsRequest, GetPermissionsResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetPermissionsRequest = {
  limit: 548814,
  offset: 592845,
};

sdk.vehicles.getPermissions(req).then((res: GetPermissionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { GetTirePressureRequest, GetTirePressureResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetTirePressureRequest = {};

sdk.vehicles.getTirePressure(req).then((res: GetTirePressureResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { ListVehiclesRequest, ListVehiclesResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: ListVehiclesRequest = {
  limit: 715190,
  offset: 844266,
};

sdk.vehicles.listVehicles(req).then((res: ListVehiclesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { Smartcar } from "SmartCar";
import { LockUnlockRequest, LockUnlockResponse } from "SmartCar/dist/sdk/models/operations";
import { SecurityActionActionEnum, SecurityResponseStatusEnum } from "SmartCar/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: LockUnlockRequest = {
  securityAction: {
    action: SecurityActionActionEnum.Unlock,
  },
};

sdk.vehicles.lockUnlock(req).then((res: LockUnlockResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```