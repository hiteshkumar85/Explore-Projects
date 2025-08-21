require('dotenv').config();

const express = require('express');
const connectDB = require('./dbconnection');
const cors = require('cors');
const path = require('path');

const app = express();

connectDB();
app.use(
  cors()
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

app.use('/api', require('./routes/projectsRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});