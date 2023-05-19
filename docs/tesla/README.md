# tesla

### Available Operations

* [getAmmeter](#getammeter) - Retrieve charging ammeter time for a Tesla.
* [getChargeTime](#getchargetime) - Retrieve charging completion time for a Tesla.
* [getCompass](#getcompass) - Retrieve compass heading for a Tesla.
* [getExteriorTemperature](#getexteriortemperature) - Retrieve exterior temperature for a Tesla.
* [getInteriorTemperature](#getinteriortemperature) - Retrieve interior temperature for a Tesla.
* [getSpeedometer](#getspeedometer) - Retrieve speed for a Tesla.
* [getVoltage](#getvoltage) - Retrieve charging voltmeter time for a Tesla.
* [getWattmeter](#getwattmeter) - Retrieve charging wattmeter time for a Tesla.
* [setAmmeter](#setammeter) - Set charging ammeter time for a Tesla.

## getAmmeter

__Description__

When the vehicle is plugged in, this endpoint returns the amperage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTeslaAmmeterResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.getAmmeter("deserunt").then((res: GetTeslaAmmeterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getChargeTime

__Description__

When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTeslaChargeTimeResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.getChargeTime("suscipit").then((res: GetTeslaChargeTimeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCompass

__Description__

This endpoint returns the compass heading of a Tesla. The value is in degrees, with 0 degrees being North.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTeslaCompassResponse } from "smartcar/dist/sdk/models/operations";
import { CompassDirection } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.getCompass("iure").then((res: GetTeslaCompassResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getExteriorTemperature

__Description__

This endpoint returns the exterior temperature of a Tesla, in celsius by default.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTeslaExteriorTemperatureResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.getExteriorTemperature("magnam").then((res: GetTeslaExteriorTemperatureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getInteriorTemperature

__Description__

This endpoint returns the interior temperature of a Tesla, in celsius by default.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTeslaInteriorTemperatureResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.getInteriorTemperature("debitis").then((res: GetTeslaInteriorTemperatureResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSpeedometer

__Description__

This endpoint returns the speed of a Tesla (in kilometers/hour by default or in miles/hour using the sc-unit-system).

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTeslaSpeedResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.getSpeedometer("ipsa").then((res: GetTeslaSpeedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getVoltage

__Description__

When the vehicle is plugged in, this endpoint returns the voltage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTeslaVoltageResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.getVoltage("delectus").then((res: GetTeslaVoltageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWattmeter

__Description__

When the vehicle is plugged in, this endpoint returns the wattage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetTeslaWattmeterResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.getWattmeter("tempora").then((res: GetTeslaWattmeterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setAmmeter

__Description__

When the vehicle is plugged in, this endpoint sets the amperage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { SetTeslaAmmeterResponse } from "smartcar/dist/sdk/models/operations";
import { SuccessResponseStatus } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.tesla.setAmmeter("suscipit", {
  amperage: 48,
}).then((res: SetTeslaAmmeterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
