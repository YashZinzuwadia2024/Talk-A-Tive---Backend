import { Router } from "express";

// Routes
import chatRoutes from "./chat.routes";

const router = Router();

// Route Permisssions
router.use("/chats", chatRoutes);

export default router;
