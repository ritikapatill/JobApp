const express = require('express');
const dotenv = require('dotenv');
const cors= require("cors")
const connectDB = require('./Database/dbConnection');
const authRoutes = require('./Routes/authRoutes');
const jobRoutes = require('./Routes/jobRoutes');
dotenv.config();
connectDB();
const app = express();
app.use(cors());


app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
