const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/search', (req, res) => {
    const { query } = req.query;
    console.log("Received query:", query); // Adicionado

    if (!query) {
        console.log("Query parameter missing"); // Adicionado
        return res.status(400).json({ error: "Query is required" });
    }

    db.all(
       "SELECT * FROM manual_paragraphs WHERE content LIKE ?",
      [`%${query}%`],
      (err, rows) => {
       if (err) {
        console.error("Database query error:", err.message); // Adicionado
        return res.status(500).json({ error: err.message });
          }
        console.log("Query results:", rows); // Adicionado
        res.json(rows)
     });
  });

router.get('/sections', (req, res) => {
    db.all("SELECT * FROM manual_sections", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        console.log("Query results:", rows);
        res.json(rows);
    });
});

module.exports = router;