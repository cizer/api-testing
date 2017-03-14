const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

app.post('/login', (req, res) => {
  if (req.body.username === 'user1' && req.body.password === 'password1') {
    return jwt.sign(req.body.username, 'superSecret', {}, (err, token) => {
      res.status(200).send({
        username: req.body.username,
        token_type: 'Bearer',
        access_token: token,
      });
    });
  }
  return res.status(401).send('Unauthorized');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
