require('dotenv').config();

const express = require('express');
const connectDB = require('./dbconnection');
const cors = require('cors');
const path = require('path');

const app = express();

connectDB();
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        'https://team4dev.netlify.app',
        'http://localhost:5173',
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
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