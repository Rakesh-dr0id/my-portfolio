const express = require('express');
const cors = require('cors');
require('dotenv').config();

const dbConfig = require('./config/dbConfig');
const portfolioRoute = require('./routes/portfolioRoute');

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5001;

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

app.use('/api/portfolio', portfolioRoute);

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
