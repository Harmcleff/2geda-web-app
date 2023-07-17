import Express from "express";
import {getPosts, addPost, deletePost, countPosts } from "../controllers/post.js"

const router = Express.Router()

router.get("/",getPosts)
router.post("/",addPost)
router.delete("/:id",deletePost)
router.get("/count/:userId",countPosts)

export default router