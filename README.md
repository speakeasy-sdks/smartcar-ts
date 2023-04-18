<div align="center">
    <img src="https://user-images.githubusercontent.com/6267663/232771888-a65b182b-9ae7-42f3-9bbe-85658a61b9e3.svg" width="350px">
    <h1>Typescript SDK</h1>
   <p>Build and scale your mobility business</p>
   <a href="https://smartcar.com/docs/api/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/smartcar-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/smartcar-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/smartcar-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/smartcar-ts?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add SmartCar
```

### Yarn

```bash
yarn add SmartCar
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

