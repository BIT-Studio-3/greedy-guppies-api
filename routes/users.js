// Import the Express module
import express from "express";

// Import the index controllers module
import { getUsers } from "../controllers/users.js";

// Create an Express router
const router = express.Router();

// Create a GET route
router.get("/", getUsers);

// Export the router
export default router;