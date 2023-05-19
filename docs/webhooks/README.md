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
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
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
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.webhooks.unsubscribe("quo", "odit").then((res: UnsubscribeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
