import express from "express";
import {
  createUserSchema,
  loginSchema,
  updateUserSchema,
} from "../schemas/user.schemas.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { getByIdSchema } from "../schemas/core.schemas.js";
import userController from "../controllers/user.controller.js";
import { authorizer } from "../middlewares/auth.middleware.js";

const userRoutes = express.Router();

userRoutes.post("/", validateRequest(createUserSchema), userController.create);

userRoutes.get("/", authorizer, userController.list);

userRoutes.delete(
  "/:id",
  validateRequest(getByIdSchema),
  userController.delete
);

userRoutes.put(
  "/:id",
  validateRequest(updateUserSchema),
  userController.update
);

userRoutes.post("/login", validateRequest(loginSchema), userController.login);

export default userRoutes;