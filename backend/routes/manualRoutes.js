const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/search', (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: "Query is required" });
    }

    db.all(
       "SELECT * FROM manual_paragraphs WHERE content LIKE ?",
      [`%${query}%`],
      (err, rows) => {
       if (err) {
        return res.status(500).json({ error: err.message });
          }
            res.json(rows)
     });
  });
  router.get('/sections', (req, res) => {
    db.all("SELECT * FROM manual_sections", (err, rows) => {
         if (err) {
          return res.status(500).json({ error: err.message });
            }
            res.json(rows);
       });
    });

module.exports = router;