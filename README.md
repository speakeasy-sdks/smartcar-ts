# SmartCar

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/smartcar-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/smartcar-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetLocationRequest,
  GetLocationResponse
} from "SmartCar/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Smartcar } from "SmartCar";
const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetLocationRequest = {
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
};

sdk.vehicles.getLocation(req).then((res: GetLocationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### compatibility

* `listCompatibility` - Compatibility

### evs

* `getBatteryCapacity` - EV Battery Capacity
* `getBatteryLevel` - EV Battery Level
* `getChargingStatus` - EV Charging Status

### vehicles

* `disconnect` - Revoke Access
* `get` - Vehicle Info
* `getEngineOil` - Engine Oil Life
* `getFuelTank` - Fuel Tank (US Only)
* `getLocation` - Location
* `getOdometer` - Odometer
* `getPermissions` - Application Permissions
* `getTirePressure` - Tire pressure
* `listVehicles` - All Vehicles
* `lockUnlock` - Unlock Vehicle
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

