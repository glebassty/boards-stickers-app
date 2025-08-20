import { Request, Response } from "express";
import { Sticker } from "../models/Sticker";
import { io } from "../services/socketService";

export class StickerController {
  static async create(req: Request, res: Response) {
    const { boardId } = req.params;
    const { text, layer } = req.body;
    const sticker = await Sticker.create({ text, layer, boardId });
    io.emit("sticker_created", sticker);
    return res.json(sticker);
  }

  static async getAll(req: Request, res: Response) {
    const { boardId } = req.params;
    const stickers = await Sticker.findAll({ where: { boardId } });
    return res.json(stickers);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { text, layer } = req.body;
    const sticker = await Sticker.findByPk(id);
    if (!sticker) return res.status(404).json({ error: "Not found" });
    await sticker.update({ text, layer });
    io.emit("sticker_updated", sticker);
    return res.json(sticker);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const sticker = await Sticker.findByPk(id);
    if (!sticker) return res.status(404).json({ error: "Not found" });
    await sticker.destroy();
    io.emit("sticker_deleted", { id });
    return res.json({ success: true });
  }
}
