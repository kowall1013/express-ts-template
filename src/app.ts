import express from "express";
import logger from "morgan";
import cors from "cors";
import * as path from "path";

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();

app.use(cors());

// Express configuration
app.set("port", process.env.PORT || 9000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);
app.use("/test", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
