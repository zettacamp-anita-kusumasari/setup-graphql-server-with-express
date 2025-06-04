// *************** IMPORT MONGOOSE MODELS *************** 
const User = require('../models/User');
const Student = require('../models/Student');
const School = require('../models/School');

// Utility function to get the current date and time
const now = () => new Date();

module.exports = {
  // GraphQL Query resolvers
  Query: {
    // Get all users who are not "soft-deleted" (deletedAt is null)
    users: () => User.find({ deletedAt: null }),

    // Get a single user by their ID
    user: (_, { id }) => User.findById(id),

    // Get all students who are not "soft-deleted"
    students: () => Student.find({ deletedAt: null }),

    // Get a single student by their ID
    student: (_, { id }) => Student.findById(id),

    // Get all schools that are not "soft-deleted"
    schools: () => School.find({ deletedAt: null }),

    // Get a single school by its ID
    school: async (_, { id }) => School.findById(id),
  },

  // Field-level resolver for School type
  School: {
    // For each School, get all its students who are not "soft-deleted"
    students: (school) => Student.find({ schoolId: school.id, deletedAt: null })
  },

  // GraphQL Mutation resolvers
  Mutation: {
    // Create a new user
    createUser: (_, args) => User.create(args),

    // Update a user's data by ID
    updateUser: (_, { id, ...updates }) => User.findByIdAndUpdate(id, updates, { new: true }),

    // Soft-delete a user (set deletedAt instead of removing from DB)
    deleteUser: (_, { id }) => User.findByIdAndUpdate(id, { deletedAt: now() }, { new: true }),

    // Create a new student
    createStudent: (_, args) => Student.create(args),

    // Update a student's data by ID
    updateStudent: (_, { id, ...updates }) => Student.findByIdAndUpdate(id, updates, { new: true }),

    // Soft-delete a student
    deleteStudent: (_, { id }) => Student.findByIdAndUpdate(id, { deletedAt: now() }, { new: true }),

    // Create a new school
    createSchool: (_, args) => School.create(args),

    // Update a school's data by ID
    updateSchool: (_, { id, ...updates }) => School.findByIdAndUpdate(id, updates, { new: true }),

    // Soft-delete a school
    deleteSchool: (_, { id }) => School.findByIdAndUpdate(id, { deletedAt: now() }, { new: true }),
  }
};
