import Express from "express";
import { getRelationships, addRelationship, deleteRelationship, countRelationships } from "../controllers/relationship.js"

const router = Express.Router()

router.get("/", getRelationships)
router.post("/", addRelationship)
router.delete("/", deleteRelationship)
router.get("/count/:userId", countRelationships)



export default router