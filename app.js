require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const { Console } = require('console');

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  morgan('":method :url :status :res[content-length] - :response-time ms"')
);

app.use(express.static(path.resolve(__dirname, 'frontend')));

app.post('/captcha', async (req, res) => {
  const secret_key = process.env.CAPTCHA_SECRET_KEY;
  const token = req.body.token;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

  const config = {
    method: 'POST',
    url,
  };

  console.log(token);

  // const response = await axios(config);
  // console.log(response.data);

  return res.status(200).json({ success: true });
});

module.exports = app;
