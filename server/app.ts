import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
export const app = express();

require("dotenv").config();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Server is running on 8000");
});

app.use("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from test route");
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} is not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
