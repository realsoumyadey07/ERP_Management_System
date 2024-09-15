import { app } from "./app";
import connectDatabase from "./utils/db";
require("dotenv").config();

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is connected to ${process.env.PORT} port`);
  connectDatabase();
});
