import express from "express";
import http from "http";
import { sequelize } from "./config/db";
import stickerRoutes from "./routes/stickerRoutes";
import { initSocket } from "./services/socketService";
import boardRoutes from "./routes/boardRoutes";

const app = express();
const server = http.createServer(app);

initSocket(server);

app.use(express.json());
app.use("/boards", stickerRoutes);
app.use("/boards", boardRoutes); 
const PORT = process.env.PORT || 4000;

(async () => {
  await sequelize.sync({ alter: true });
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
