// *************** IMPORT CORE ***************
const mongoose = require('mongoose');

// *************** START: Description of the section ***************

// Schema for the User
const userSchema = new mongoose.Schema({
  firstName: {
    // User's first name
    type: String,
    required: true
  },

  lastName: {
    // User's last name
    type: String,
    required: true
  },
  
  email: {
    // User's email address
    type: String,
    required: true,
    // No two users can have the same email 
    unique: true
  },
  
  password: {
    // User's password
    type: String,
    // Password is mandatory
    required: true
  },
  
  role: {
    // User's role (e.g., 'admin', 'student', 'teacher')
    type: String,
    required: true
  },
  
  deletedAt: {
    // For soft delete
    type: Date,
    // Null means the user is active
    default: null
  }
},
{
  // Automatically adds 'createdAt' and 'updatedAt' fields
  timestamps: true
});

// Export the model so it can be used in other files
module.exports = mongoose.model('User', userSchema);

// *************** END: Description of the section ***************