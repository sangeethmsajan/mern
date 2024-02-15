const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
// Middleware
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Could not connect to MongoDB:', err));
// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
