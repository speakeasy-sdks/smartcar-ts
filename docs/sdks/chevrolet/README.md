# chevrolet

### Available Operations

* [getChargeTime](#getchargetime) - Retrieve charging completion time for a Chevrolet.
* [getVoltage](#getvoltage) - Retrieve charging voltmeter time for a Chevrolet.

## getChargeTime

__Description__

When the vehicle is charging, this endpoint returns the date and time the vehicle expects to complete this charging session. When the vehicle is not charging, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetChevroletChargeTimeResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "",
  },
});

sdk.chevrolet.getChargeTime("distinctio").then((res: GetChevroletChargeTimeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetChevroletChargeTimeResponse](../../models/operations/getchevroletchargetimeresponse.md)>**


## getVoltage

__Description__

When the vehicle is plugged in, this endpoint returns the voltage of the charger measured by the vehicle. When the vehicle is not plugged in, this endpoint results in a vehicle state error.

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { GetChevroletVoltageResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "",
  },
});

sdk.chevrolet.getVoltage("quibusdam").then((res: GetChevroletVoltageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetChevroletVoltageResponse](../../models/operations/getchevroletvoltageresponse.md)>**

