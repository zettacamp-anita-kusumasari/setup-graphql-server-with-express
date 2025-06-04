// Import Mongoose to interact with MongoDB
const mongoose = require('mongoose');
// Load environment variables from a .env file into process.env
require('dotenv').config();

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGO_URI, {
  // Use the new URL parser (recommended)
  useNewUrlParser: true,
  // Use the new server discovery and monitoring engine 
  useUnifiedTopology: true 
})
// If connection is successful, log this message
.then(() => console.log('MongoDB connected!')) 
// If there's an error, log the error
.catch(err => console.error('MongoDB connection error:', err)); 