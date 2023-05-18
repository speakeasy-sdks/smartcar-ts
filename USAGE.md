<!-- Start SDK Example Usage -->
```typescript
import { Smartcar } from "smartcar";
import { GetLocationResponse } from "smartcar/dist/sdk/models/operations";

const sdk = new Smartcar({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.vehicles.getLocation("36ab27d0-fd9d-4455-823a-ce30af709ffc").then((res: GetLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->