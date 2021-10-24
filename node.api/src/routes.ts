import { Router } from "express"
import { ensureAuthenticated } from "../prisma/middleware/ensureAuthenticated"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateMessageController } from "./controllers/CreateMessageController"

export const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)
