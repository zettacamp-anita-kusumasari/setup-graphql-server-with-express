const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  deletedAt: {
    type: Date,
    default: null
  }
},
{
  timestamps: true
});

schoolSchema.virtual('students', {
  ref: 'Student',
  localField: '_id',
  foreignField: 'schoolId'
});

schoolSchema.set('toObject', {
  virtuals: true
});
schoolSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('School', schoolSchema);