const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Error connecting to db');
});

connection.on('connected', () => {
  console.log('successfully connected to db');
});

module.exports = connection;
