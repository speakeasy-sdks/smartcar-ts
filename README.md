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
    bearerAuth: "",
  },
});

sdk.vehicles.getLocation("36ab27d0-fd9d-4455-823a-ce30af709ffc").then((res: GetLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cadillac](docs/sdks/cadillac/README.md)

* [getChargeTime](docs/sdks/cadillac/README.md#getchargetime) - Retrieve charging completion time for a Cadillac.
* [getVoltage](docs/sdks/cadillac/README.md#getvoltage) - Retrieve charging voltmeter time for a Cadillac.

### [chevrolet](docs/sdks/chevrolet/README.md)

* [getChargeTime](docs/sdks/chevrolet/README.md#getchargetime) - Retrieve charging completion time for a Chevrolet.
* [getVoltage](docs/sdks/chevrolet/README.md#getvoltage) - Retrieve charging voltmeter time for a Chevrolet.

### [compatibility](docs/sdks/compatibility/README.md)

* [listCompatibility](docs/sdks/compatibility/README.md#listcompatibility) - Compatibility

### [evs](docs/sdks/evs/README.md)

* [getBatteryCapacity](docs/sdks/evs/README.md#getbatterycapacity) - EV Battery Capacity
* [getBatteryLevel](docs/sdks/evs/README.md#getbatterylevel) - EV Battery Level
* [getChargingLimit](docs/sdks/evs/README.md#getcharginglimit) - EV Charging Limit
* [getChargingStatus](docs/sdks/evs/README.md#getchargingstatus) - EV Charging Status
* [setChargingLimit](docs/sdks/evs/README.md#setcharginglimit) - Set EV Charging Limit
* [startStopCharge](docs/sdks/evs/README.md#startstopcharge) - Start or stop charging an electric vehicle. Please contact us to request early access.

### [tesla](docs/sdks/tesla/README.md)

* [getAmmeter](docs/sdks/tesla/README.md#getammeter) - Retrieve charging ammeter time for a Tesla.
* [getChargeTime](docs/sdks/tesla/README.md#getchargetime) - Retrieve charging completion time for a Tesla.
* [getCompass](docs/sdks/tesla/README.md#getcompass) - Retrieve compass heading for a Tesla.
* [getExteriorTemperature](docs/sdks/tesla/README.md#getexteriortemperature) - Retrieve exterior temperature for a Tesla.
* [getInteriorTemperature](docs/sdks/tesla/README.md#getinteriortemperature) - Retrieve interior temperature for a Tesla.
* [getSpeedometer](docs/sdks/tesla/README.md#getspeedometer) - Retrieve speed for a Tesla.
* [getVoltage](docs/sdks/tesla/README.md#getvoltage) - Retrieve charging voltmeter time for a Tesla.
* [getWattmeter](docs/sdks/tesla/README.md#getwattmeter) - Retrieve charging wattmeter time for a Tesla.
* [setAmmeter](docs/sdks/tesla/README.md#setammeter) - Set charging ammeter time for a Tesla.

### [user](docs/sdks/user/README.md)

* [getInfo](docs/sdks/user/README.md#getinfo) - User Info

### [vehicles](docs/sdks/vehicles/README.md)

* [batch](docs/sdks/vehicles/README.md#batch) - Batch
* [disconnect](docs/sdks/vehicles/README.md#disconnect) - Revoke Access
* [get](docs/sdks/vehicles/README.md#get) - Vehicle Info
* [getEngineOil](docs/sdks/vehicles/README.md#getengineoil) - Engine Oil Life
* [getFuelTank](docs/sdks/vehicles/README.md#getfueltank) - Fuel Tank (US Only)
* [getLocation](docs/sdks/vehicles/README.md#getlocation) - Location
* [getOdometer](docs/sdks/vehicles/README.md#getodometer) - Odometer
* [getPermissions](docs/sdks/vehicles/README.md#getpermissions) - Application Permissions
* [getTirePressure](docs/sdks/vehicles/README.md#gettirepressure) - Tire pressure
* [getVin](docs/sdks/vehicles/README.md#getvin) - Returns the vehicle’s manufacturer identifier.
* [listVehicles](docs/sdks/vehicles/README.md#listvehicles) - All Vehicles
* [lockUnlock](docs/sdks/vehicles/README.md#lockunlock) - Lock/Unlock Vehicle

### [webhooks](docs/sdks/webhooks/README.md)

* [subscribe](docs/sdks/webhooks/README.md#subscribe) - Subscribe Webhook
* [unsubscribe](docs/sdks/webhooks/README.md#unsubscribe) - Unsubscribe Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

