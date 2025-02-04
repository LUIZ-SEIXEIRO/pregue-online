const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const db = new sqlite3.Database('pregue-online.db', (err) => {
    if (err) {
        console.error('Failed to connect to the database', err.message);
        throw err
    } else {
        console.log("successfully connected to database")
    }
});

/* IMPORT MANUAL DATA */

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS books (name TEXT PRIMARY KEY)", (err) => {
        if (err) {
            console.error('Failed to Create Table books', err);
        }
    })
    db.run("CREATE TABLE IF NOT EXISTS chapters (book TEXT, chapter INTEGER, PRIMARY KEY (book,chapter))", (err) => {
        if (err) {
            console.error('Failed to create Table chapters', err);
        }
    });
    db.run("CREATE TABLE IF NOT EXISTS manual_sections (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, section_order INTEGER)", (err) => {
        if (err) {
            console.error('Failed to Create Table manual_sections', err)
        }
    })
    db.run("CREATE TABLE IF NOT EXISTS manual_subsections (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, parent_id INTEGER, section_order INTEGER)", (err) => {
        if (err) {
            console.error('Failed to Create Table manual_subsections', err)
        }
    })
    db.run("CREATE TABLE IF NOT EXISTS manual_articles (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, parent_id INTEGER, section_order INTEGER)", (err) => {
        if (err) {
            console.error('Failed to Create Table manual_articles', err)
        }
    })

    db.run("CREATE TABLE IF NOT EXISTS manual_paragraphs (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, article_id INTEGER, section_order INTEGER)", (err) => {
        if (err) {
            console.error("Error creating manual_paragraphs table:", err)
        }
    })

    const manualText = fs.readFileSync('manual.txt', 'utf-8');
    const sections = manualText.split('##');
    let sectionId = 0;

    sections.forEach(section => {
        const lines = section.trim().split('\n');
        const sectionTitle = lines.shift().replace('# ', '').trim();

        db.run("INSERT INTO manual_sections (title) VALUES (?)", [sectionTitle], function (err) {
            if (err) {
                return console.error("Error inserting section", err.message);
            }
            console.log(`Section inserted: ${sectionTitle}`);
            sectionId = this.lastID;  // Get the ID of the last inserted row
             let articleId = 0;
                lines.forEach(article => {
                const lines = article.trim().split('\n');
                const articleTitle = lines.shift().trim();

                db.run("INSERT INTO manual_articles (title, parent_id) VALUES (?, ?)", [articleTitle, sectionId], function (err) {
                if (err) {
                    return console.error("Error inserting article", err.message);

                }
                articleId = this.lastID;  // Get the ID of the last inserted row
                    lines.forEach(paragraph => {
                     db.run("INSERT INTO manual_paragraphs (content, article_id) VALUES (?, ?)", [paragraph, articleId], function (err) {
                      if (err) {
                     return console.error("Error inserting paragraph", err.message);
                         }
                     console.log(`row inserted`);
                     });
                  })
                  });
                  });
        });

    });
});
module.exports = db;