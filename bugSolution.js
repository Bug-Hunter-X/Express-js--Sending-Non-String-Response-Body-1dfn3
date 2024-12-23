const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Correct usage of res.send, stringifying the object using JSON.stringify
  res.send(JSON.stringify({ message: 'Hello!' }));
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});