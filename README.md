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
import { Smartcar } from "smartcar";
import { GetLocationResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

sdk.vehicles.getLocation({}).then((res: GetLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cadillac](docs/cadillac/README.md)

* [getChargeTime](docs/cadillac/README.md#getchargetime) - Retrieve charging completion time for a Cadillac.
* [getVoltage](docs/cadillac/README.md#getvoltage) - Retrieve charging voltmeter time for a Cadillac.

### [chevrolet](docs/chevrolet/README.md)

* [getChargeTime](docs/chevrolet/README.md#getchargetime) - Retrieve charging completion time for a Chevrolet.
* [getVoltage](docs/chevrolet/README.md#getvoltage) - Retrieve charging voltmeter time for a Chevrolet.

### [compatibility](docs/compatibility/README.md)

* [listCompatibility](docs/compatibility/README.md#listcompatibility) - Compatibility

### [evs](docs/evs/README.md)

* [getBatteryCapacity](docs/evs/README.md#getbatterycapacity) - EV Battery Capacity
* [getBatteryLevel](docs/evs/README.md#getbatterylevel) - EV Battery Level
* [getChargingLimit](docs/evs/README.md#getcharginglimit) - EV Charging Limit
* [getChargingStatus](docs/evs/README.md#getchargingstatus) - EV Charging Status
* [setChargingLimit](docs/evs/README.md#setcharginglimit) - Set EV Charging Limit
* [startStopCharge](docs/evs/README.md#startstopcharge) - Start or stop charging an electric vehicle. Please contact us to request early access.

### [user](docs/user/README.md)

* [getInfo](docs/user/README.md#getinfo) - User Info

### [vehicles](docs/vehicles/README.md)

* [batch](docs/vehicles/README.md#batch) - Batch
* [disconnect](docs/vehicles/README.md#disconnect) - Revoke Access
* [get](docs/vehicles/README.md#get) - Vehicle Info
* [getEngineOil](docs/vehicles/README.md#getengineoil) - Engine Oil Life
* [getFuelTank](docs/vehicles/README.md#getfueltank) - Fuel Tank (US Only)
* [getLocation](docs/vehicles/README.md#getlocation) - Location
* [getOdometer](docs/vehicles/README.md#getodometer) - Odometer
* [getPermissions](docs/vehicles/README.md#getpermissions) - Application Permissions
* [getTirePressure](docs/vehicles/README.md#gettirepressure) - Tire pressure
* [getVin](docs/vehicles/README.md#getvin) - Returns the vehicle’s manufacturer identifier.
* [listVehicles](docs/vehicles/README.md#listvehicles) - All Vehicles
* [lockUnlock](docs/vehicles/README.md#lockunlock) - Lock/Unlock Vehicle
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

