<!-- Start SDK Example Usage -->
```typescript
import { Smartcar } from "SmartCar";
import { GetLocationRequest, GetLocationResponse } from "SmartCar/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Smartcar({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetLocationRequest = {};

sdk.vehicles.getLocation(req).then((res: GetLocationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->