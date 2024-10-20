const express = require('express');
const { getJournalEntries, addJournalEntry } = require('../../controllers/v1/journalController');
const { authenticateToken } = require('../../middleware/authMiddleware'); // Assuming you have auth middleware

const router = express.Router();

// GET /journal - Fetch journal entries for the authenticated user
router.get('/journal', authenticateToken, getJournalEntries);

// POST /journal - Add a new drink to the journal
router.post('/journal', authenticateToken, addJournalEntry);

module.exports = router;
