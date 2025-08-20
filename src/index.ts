import express from "express";
import { sequelize } from "./config/db";
import boardRoutes from "./routes/boardRoutes";

const app = express();
app.use(express.json());

app.use("/boards", boardRoutes);

const PORT = process.env.PORT || 4000;

(async () => {
  await sequelize.sync({ alter: true });
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();

