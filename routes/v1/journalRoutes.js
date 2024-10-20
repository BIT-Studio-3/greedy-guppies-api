import { Router } from "express";
import { getJournalEntries, addJournalEntry } from "../../controllers/v1/journalController.js";
import  authenticateToken  from "../../middleware/authMiddleware.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     JournalEntry:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         drinkId:
 *           type: string
 *           format: uuid
 *           example: "678e4567-e89b-12d3-a456-426614174000"
 *         userId:
 *           type: string
 *           format: uuid
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: "2024-07-14T12:34:56Z"
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * security:
 *   - BearerAuth: []
 */

/**
 * @swagger
 * /api/v1/journal:
 *   get:
 *     summary: Fetch all journal entries for the authenticated user
 *     tags:
 *       - Journal
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: A list of journal entries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 journalEntries:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/JournalEntry'
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error fetching journal entries"
 */

/**
 * @swagger
 * /api/v1/journal:
 *   post:
 *     summary: Add a new journal entry for the authenticated user
 *     tags:
 *       - Journal
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               drinkId:
 *                 type: string
 *                 format: uuid
 *                 example: "678e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       '201':
 *         description: Journal entry added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Journal entry added successfully!"
 *                 newEntry:
 *                   $ref: '#/components/schemas/JournalEntry'
 *       '400':
 *         description: Bad Request - Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid input"
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error adding journal entry"
 */

router.get("/", authenticateToken, getJournalEntries);
router.post("/", authenticateToken, addJournalEntry);

export default router;
