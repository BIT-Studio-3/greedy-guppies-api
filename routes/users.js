import express from "express";

import {
  createUser,
  findUsers,
  findUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", findUsers);
router.get("/:id", findUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;