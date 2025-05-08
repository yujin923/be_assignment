const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const stringify = obj =>
  Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

app.get('/', (req, res) => {
  res.send(stringify(req.query));
});

app.post('/', (req, res) => {
  res.send(stringify(req.body));
});

app.put('/', (req, res) => {
  res.send(stringify(req.body));
});

app.delete('/', (req, res) => {
  res.send(stringify(req.body));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
