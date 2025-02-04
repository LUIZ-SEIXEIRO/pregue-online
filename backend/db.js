const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('pregue-online.db', (err) => {
    if (err) {
        console.error('Failed to connect to the database',err.message);
        throw err
    } else {
        console.log("successfully connected to database")
    }
});
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS books (name TEXT PRIMARY KEY)", (err) => {
         if (err) {
                console.error('Failed to Create Table books',err);
          }
    })
    db.run("CREATE TABLE IF NOT EXISTS chapters (book TEXT, chapter INTEGER, PRIMARY KEY (book,chapter))", (err) => {
        if (err) {
          console.error('Failed to create Table chapters',err);
        }
    });
     db.run("CREATE TABLE IF NOT EXISTS studies (name TEXT PRIMARY KEY)", (err) => {
         if (err) {
             console.error('Failed to create Table studies', err);
         }
     })

     db.run("CREATE TABLE IF NOT EXISTS manual_sections (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, section_order INTEGER)", (err) => {
            if(err) {
             console.error('Failed to Create Table manual_sections',err)
            }
        })
     db.run("CREATE TABLE IF NOT EXISTS manual_subsections (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, parent_id INTEGER, section_order INTEGER)", (err) => {
             if(err) {
                console.error('Failed to Create Table manual_subsections',err)
               }
         })
      db.run("CREATE TABLE IF NOT EXISTS manual_articles (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, parent_id INTEGER, section_order INTEGER)", (err) => {
             if(err) {
                console.error('Failed to Create Table manual_articles',err)
              }
         })

       db.run("CREATE TABLE IF NOT EXISTS manual_paragraphs (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, article_id INTEGER, section_order INTEGER)", (err) => {
               if (err) {
                console.error("Error creating manual_paragraphs table:",err)
                  }
            })
     db.get("SELECT name FROM books WHERE name = ? ", ["Gênesis"], (err, row) => {
         if (err) {
          console.error('Error testing database:', err);
        }
        if (!row) {
            const books = ["Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio", "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel", "1 Reis", "2 Reis", "1 Crônicas", "2 Crônicas", "Esdras", "Neemias", "Ester", "Jó", "Salmos", "Provérbios", "Eclesiastes", "Cantares", "Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel", "Oséias", "Joel", "Amós", "Obadias", "Jonas", "Miquéias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias", "Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "1 Coríntios", "2 Coríntios", "Gálatas", "Efésios", "Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses", "1 Timóteo", "2 Timóteo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro", "1 João", "2 João", "3 João", "Judas", "Apocalipse"];
            const stmt = db.prepare("INSERT INTO books(name) VALUES (?)");
            for (const book of books) {
               stmt.run(book);
           }
            stmt.finalize()
             console.log('Successfully Added books into the database');

         }
         db.get("SELECT * FROM chapters WHERE book = ? AND chapter = ?",["Gênesis",1],(err,row) => {
           if(err) {
              console.error("failed get Chapters:", err)
            }
             if(!row) {
                const chapterCounts = {
                   "Gênesis": 50, "Êxodo": 40, "Levítico": 27, "Números": 36, "Deuteronômio": 34, "Josué": 24, "Juízes": 21, "Rute": 4,
                   "1 Samuel": 31, "2 Samuel": 24, "1 Reis": 22, "2 Reis": 25, "1 Crônicas": 29, "2 Crônicas": 36, "Esdras": 10,
                    "Neemias": 13, "Ester": 10, "Jó": 42, "Salmos": 150, "Provérbios": 31, "Eclesiastes": 12, "Cantares": 8,
                    "Isaías": 66, "Jeremias": 52, "Lamentações": 5, "Ezequiel": 48, "Daniel": 12, "Oséias": 14, "Joel": 3, "Amós": 9,
                    "Obadias": 1, "Jonas": 4, "Miquéias": 7, "Naum": 3, "Habacuque": 3, "Sofonias": 3, "Ageu": 2, "Zacarias": 14,
                    "Malaquias": 4, "Mateus": 28, "Marcos": 16, "Lucas": 24, "João": 21, "Atos": 28, "Romanos": 16,
                    "1 Coríntios": 16, "2 Coríntios": 13, "Gálatas": 6, "Efésios": 6, "Filipenses": 4, "Colossenses": 4,
                    "1 Tessalonicenses": 5, "2 Tessalonicenses": 3, "1 Timóteo": 6, "2 Timóteo": 4, "Tito": 3, "Filemom": 1,
                    "Hebreus": 13, "Tiago": 5, "1 Pedro": 5, "2 Pedro": 3, "1 João": 5, "2 João": 1, "3 João": 1, "Judas": 1,
                    "Apocalipse": 22
                };
                 const stmt = db.prepare("INSERT INTO chapters(book,chapter) VALUES (?,?)")
                for (const book in chapterCounts) {
                for(let i = 1; i <= chapterCounts[book]; i++){
                      stmt.run(book,i)
                    }
                    }
                   stmt.finalize()
                     console.log('Successfully Added chapters into the database');

            }
         })
    });
});
module.exports = db;