import express from "express"

import { addJournalEntry, getJournalEntries } from "../../controllers/v1/journalController";
import { authenticateToken }  from '../../middleware/authMiddleware';

const router = express.Router();

// Fetch journal entries for the authenticated user
router.get('/getall', authenticateToken, getJournalEntries);

// Add a new drink to the journal
router.post('/add', authenticateToken, addJournalEntry);

export default router;