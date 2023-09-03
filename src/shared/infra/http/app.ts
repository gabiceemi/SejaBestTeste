import "reflect-metadata";

import express from "express";

import { router } from "./routes";

import createConnection from "../../../shared/infra/typeorm";

import "../../../shared/container";

createConnection();

export const app = express();

app.use(express.json());

app.use(router);