import { Router } from "express";
import { StickerController } from "../controllers/stickerController";

const router = Router();

router.post("/:boardId/stickers", StickerController.create);
router.get("/:boardId/stickers", StickerController.getAll);
router.patch("/stickers/:id", StickerController.update);
router.delete("/stickers/:id", StickerController.delete);

export default router;
