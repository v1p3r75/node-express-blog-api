const express = require("express");
import { Application } from "express";
const app : Application = express();
import { ApiRouter } from "./routes/routes";

app.use(express.json());
app.use(ApiRouter);

export default app;