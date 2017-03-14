const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

app.post('/login', (req, res) => {
  if (req.body.username === 'user1' && req.body.password === 'password1') {
    return res.status(200).send({
      username: req.body.username,
      token_type: 'Bearer',
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    });
  }
  return res.status(401).send('Unauthorized');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
