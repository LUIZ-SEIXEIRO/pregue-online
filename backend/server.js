const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bibleRoutes = require('./routes/bibleRoutes');
const manualRoutes = require('./routes/manualRoutes');
const db = require('./db');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', bibleRoutes);
app.use('/api', manualRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});