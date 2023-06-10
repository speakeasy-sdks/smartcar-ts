# webhooks

### Available Operations

* [subscribe](#subscribe) - Subscribe Webhook
* [unsubscribe](#unsubscribe) - Unsubscribe Webhook

## subscribe

__Description__

Subscribe to a webhook for a vehicle.

__Permission__

`required: webhook:read`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { SubscribeResponse } from "smartcar/dist/sdk/models/operations";
import { SuccessResponseStatus } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "",
  },
});

sdk.webhooks.subscribe("repellendus", "sapiente", {
  vehicleid: "dc6ea99e-57d1-4e41-b129-27e7eb58713e",
  webhookid: "9b6ae692-60cc-4b3e-89d8-71e7549cf805",
}).then((res: SubscribeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `webhookId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `webhookInfo`                                                | [shared.WebhookInfo](../../models/shared/webhookinfo.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SubscribeResponse](../../models/operations/subscriberesponse.md)>**


## unsubscribe

__Description__

Delete a webhook for a vehicle.

__Permission__

`required: webhook:read`

__Response body__

|  Name 	|Type   	|Boolean   	|
|---	|---	|---	|
|  status|   string|  If the request is successful, Smartcar will return “success” (HTTP 200 status).|

### Example Usage

```typescript
import { Smartcar } from "smartcar";
import { UnsubscribeResponse } from "smartcar/dist/sdk/models/operations";
import { SuccessResponseStatus } from "smartcar/dist/sdk/models/shared";

const sdk = new Smartcar({
  security: {
    bearerAuth: "",
  },
});

sdk.webhooks.unsubscribe("quo", "odit").then((res: UnsubscribeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `vehicleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `webhookId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UnsubscribeResponse](../../models/operations/unsubscriberesponse.md)>**

