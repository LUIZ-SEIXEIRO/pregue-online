const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/books', (req, res) => {
    db.all("SELECT name FROM books", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
          const bookNames = rows.map(row => row.name);

        res.json(bookNames);
    });
});
router.get('/chapters/:book', (req, res) => {
    const { book } = req.params;
   db.all("SELECT chapter FROM chapters WHERE book = ?", [book], (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
         const chapterNumbers = rows.map(row => row.chapter);
      res.json(chapterNumbers)
    });
});


module.exports = router;