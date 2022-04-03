const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
