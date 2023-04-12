const express = require("express");
const app = express();
import { ApiRouter } from "./routes/routes";

app.use(express.json());
app.use(ApiRouter);

export default app;