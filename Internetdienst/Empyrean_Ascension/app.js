const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB Atlas
const connectionString = mongodb+srv://isiomaogboi:10ZFCata_22!@cluster0.pd09dsb.mongodb.net/;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error.message);
});

// Use routes
app.use('/api', userRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
