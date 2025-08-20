import express from "express";
import { sequelize } from "./config/db";

const app = express();
app.use(express.json());

(async () => {
  await sequelize.sync();
})();

const PORT = process.env.PORT || 4000;

(async () => {
  await sequelize.sync({ alter: true });
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();

