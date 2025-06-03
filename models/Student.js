// *************** IMPORT MONGOOSELIBRARY *************** 
const mongoose = require('mongoose');

// *************** START: Description of the section ***************

// Schema for the Student
const studentSchema = new mongoose.Schema({
  firstName: {
    // Student's first name
    type: String,
    required: true
  },

  lastName: {
    // Student's last name
    type: String,
    required: true
  },
  
  email: {
    // Student's email address
    type: String,
    required: true,
    // Must be unique across all student records
    unique: true
  },
  
  dateOfBirth: {
    // Student's date of birth
    type: Date
  },
  
  schoolId: {
    // This is a reference to the related School document
    type: mongoose.Schema.Types.ObjectId,
    // Refers to the 'School' model
    ref: 'School',
    required: true
  },
  
  deletedAt: {
    type: Date,
    // Used for soft deletes; null means not deleted
    default: null
  }
},
{
  // Automatically adds createdAt and updatedAt fields
  timestamps: true
});

// Export the Student model so it can be used in other files
module.exports = mongoose.model('Student', studentSchema);

// *************** END: Description of the section ***************