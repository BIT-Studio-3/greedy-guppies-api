import prisma from '../../prisma/prisma.js'; // Import Prisma for DB access

// Fetch journal entries for the authenticated user
const getJournalEntries = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming req.user is populated via auth middleware

    const journalEntries = await prisma.journalEntry.findMany({
      where: { userId },
      select: {
        id: true,
        drinkId: true,
        timeDrunk: true,
        createdAt: true,
        // Avoid including user-related fields by not selecting them
      }
      
    });
    console.log(journalEntries);
    res.status(200).json({ journalEntries });

  } catch (error) {
    console.error('Error fetching journal entries:', error);
    res.status(500).json({ message: 'Error fetching journal entries' });
  }
};

// Add a new journal entry
const addJournalEntry = async (req, res) => {
  try {
    const { userId, drinkId } = req.body;

    const newEntry = await prisma.journalEntry.create({
      data: {
        userId,
        drinkId,
        timeDrunk: new Date(), // Save the timestamp when added
      }
    });

    res.status(201).json({ message: 'Journal entry added successfully!', newEntry });
  } catch (error) {
    console.error('Error adding journal entry:', error);
    res.status(500).json({ message: 'Error adding journal entry' });
  }
};


   export { getJournalEntries, addJournalEntry };

