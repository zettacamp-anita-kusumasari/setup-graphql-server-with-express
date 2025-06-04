// *************** IMPORT MONGOOSE *************** 
const mongoose = require('mongoose');

// *************** START: Description of the section ***************

// Schema for the School collection
const schoolSchema = new mongoose.Schema({
  name: {
    // Name of the school
    type: String, 
    required: true
  },
  // Address of the school
  address: {
    type: String
  },
  
  deletedAt: {
    // For soft delete: indicates when the school was marked as deleted
    type: Date,
    // Null means it has not been deleted
    default: null
  }
},
{
  // Automatically adds createdAt and updatedAt fields
  timestamps: true
});

// Define a virtual field called 'students' to link School with Student documents
schoolSchema.virtual('students', {
  // Reference to the Student model
  ref: 'Student',
  // School's _id
  localField: '_id',
  // The field in the Student model that references the School
  foreignField: 'schoolId'
});

// Include virtual fields when converting the document to a plain JavaScript object
schoolSchema.set('toObject', {
  virtuals: true
});

// Include virtual fields when converting the document to JSON format
schoolSchema.set('toJSON', {
  virtuals: true
});

// Export the School model so it can be used in other files
module.exports = mongoose.model('School', schoolSchema);

// *************** END: Description of the section ***************