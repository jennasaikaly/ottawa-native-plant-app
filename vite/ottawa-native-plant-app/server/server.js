const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbo = require("./db/connection.js")
const mongoose = require('mongoose')
const app = express();


app.use(cors());
app.use(express.json());
app.use(require("./routes"))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ottawa-native-plant-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

const PORT = 3000;
// const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));