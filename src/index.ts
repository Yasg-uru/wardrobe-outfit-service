import express, { Application } from "express";
import { config } from "dotenv";
config();

const app: Application = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Outfit service is running on PORT : ${PORT}`);
});
