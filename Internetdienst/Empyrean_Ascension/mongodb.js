// db.js
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://isiomaogboi:10ZFCata_22!@cluster0.pd09dsb.mongodb.net/'; 

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
