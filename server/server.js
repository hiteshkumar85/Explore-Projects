const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./dbconnection');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('backend is running');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});
