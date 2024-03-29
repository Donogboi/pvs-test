const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

const cors = require('cors');

// Enable CORS for all routes (adjust options as needed)
app.use(cors());
