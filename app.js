import express from "express";
import { PORT } from "./config/env.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();

/* ✅ It prefixes all routes inside the router

So in the auth.routes.js I have internally:
authRouter.post("/sign-up");

But externally the full path becomes:
/api/v1/auth/sign-up

Same for:
/api/v1/auth/sign-in
*/

/* We write v1 because it is the first version of the API.
We only use v2, v3, etc. when we release new major versions that change or break previous functionality.*/

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API");
});

app.listen(PORT, () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );
});

export default app;
