// Importieren des Express-Frameworks
const express = require('express');

// Erstellen einer Express-Anwendung
const app = express();

// Definieren eines Endpunkts für "http://localhost:3000/hello"
app.get('/hello', (req, res) => {
  res.send('Hallo Welt');
});

// Starten des Servers auf Port 3000
app.listen(3000, () => {
  console.log('Der Server läuft auf http://localhost:3000');
});
