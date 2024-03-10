// Load environment variables from .env file 
require('dotenv').config(); 
 
// Require mongoose library 
const mongoose = require('mongoose'); 
 
// MongoDB URI from environment variables 
const uri = process.env.MONGODB_URI; 
 
// MongoDB options 
const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}; 
 
// Connect to MongoDB 
mongoose.connect(uri, options) 
    .then(() => console.log('Connected to MongoDB')) 
    .catch((err) => console.error('Error connecting to MongoDB:', err)); 
 
// Get default connection 
const db = mongoose.connection; 
 
// Export connection 
module.exports = db;