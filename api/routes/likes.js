import Express from "express";
import { getLikes, addLikes, deleteLike } from "../controllers/like.js"

const router = Express.Router()

router.get("/", getLikes )
router.post("/", addLikes )
router.delete("/", deleteLike )

export default router;


