const express = require('express');
const { getJournalEntries, addJournalEntry } = require('../../controllers/v1/journalController');
const { authenticateToken } = require('../../middleware/authMiddleware'); // Assuming you have auth middleware

const router = express.Router();

// Fetch journal entries for the authenticated user
router.get('/getall', authenticateToken, getJournalEntries);

// Add a new drink to the journal
router.post('/add', authenticateToken, addJournalEntry);

module.exports = router;
