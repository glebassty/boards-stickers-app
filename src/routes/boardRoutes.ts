import { Router } from "express";
import { Board } from "../models/Board";

const router = Router();

router.post("/", async (req, res) => {
  const { title } = req.body;
  const board = await Board.create({ title });
  return res.json(board);
});

router.get("/", async (req, res) => {
  const boards = await Board.findAll();
  return res.json(boards);
});

export default router;
