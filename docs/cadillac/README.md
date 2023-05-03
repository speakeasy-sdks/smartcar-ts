# cadillac

### Available Operations

* [getChargeTime](#getchargetime) - Retrieve charging completion time for a Cadillac.
* [getVoltage](#getvoltage) - Retrieve charging voltmeter time for a Cadillac.

## getChargeTime

__Description__

When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetCadillacChargeTimeResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.cadillac.getChargeTime({}).then((res: GetCadillacChargeTimeResponse) => {
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
import { GetCadillacVoltageResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.cadillac.getVoltage({}).then((res: GetCadillacVoltageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
