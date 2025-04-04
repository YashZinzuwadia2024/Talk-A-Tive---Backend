import { Router } from "express";

// Controllers
import { getChats } from "../controllers/chat.controller";

const router = Router();

// Routes
router.get("/", getChats);

export default router;
