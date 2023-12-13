import Express from "express";
import {getUser, updateUser, searchUser} from "../controllers/user.js"

const router = Express.Router()

router.get("/find/:userId",getUser)
router.put("/",updateUser)
router.get("/search",searchUser)

export default router
