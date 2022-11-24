require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const got = require('got');

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  morgan('":method :url :status :res[content-length] - :response-time ms"')
);

app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/captcha', async (req, res) => {
  const secret_key = process.env.CAPTCHA_SECRET_KEY;
  const token = req.body.token;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

  const data = await got.post(url).json();

  return res.status(200).json({ success: data.success });
});

module.exports = app;
