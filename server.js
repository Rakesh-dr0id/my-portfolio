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

app.use('/api/portfolio', portfolioRoute);

//serving the frontend
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function (_, res) {
  res.sendFile(
    path.join(__dirname, './client/build/index.html'),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
