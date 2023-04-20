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
  vehicleId: "36ab27d0-fd9d-4455-823a-ce30af709ffc",
});

const req: GetLocationRequest = {};

sdk.vehicles.getLocation(req).then((res: GetLocationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->