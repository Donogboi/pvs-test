// Importieren des Express-Frameworks
const express = require('express');

// Erstellen einer Express-Anwendung
const app = express();

// Definieren des GET-Endpunkts
app.get('/', (req, res) => {
  res.send('Hallo, world! My name is Don and this my Express Webserver.');
});

// Starten des Servers auf Port 3000
app.listen(3000, () => {
  console.log('Der Server läuft auf http://localhost:3000');
});
