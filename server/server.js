const express = require('express');
const connectDB = require('./dbconnection');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config();

app.use("/public", express.static(path.join(__dirname, "public")));
connectDB();

app.use(cors({
  origin: [
    'https://team4dev.netlify.app',
    'http://localhost:5173'
  ],
  credentials: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('backend is running');
});

app.use('/api', require('./routes/projectsRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});