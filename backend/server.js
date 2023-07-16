const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true, // Enable CORS credentials (cookies, authorization headers, etc.)
  sameSite: 'none', // Set sameSite attribute for cross-site cookies
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = process.env.PORT || 5000;
const data = require('./routes/dataRoute');
const admin = require('./routes/admin');
const connectDatabase = require("./config/database");

connectDatabase();
app.use('/api/v1', data);
app.use('/api/v1', admin);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
