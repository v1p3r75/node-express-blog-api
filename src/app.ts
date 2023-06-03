const express = require("express");
import { Application } from "express";
const app : Application = express();
import { ApiRouter } from "./routes/routes";
import morgan = require("morgan");


app.use(express.json({extended : true}));
app.use(express.urlencoded())
app.use(morgan('dev'))
app.use(ApiRouter);

export default app;