const School = require('../models/School');
const Student = require('../models/Student');

const schoolResolvers = {
  Query: {
    getAllSchools: async () => {
      return await School.find({ deleted: false });
    },
    getSchoolById: async (_, { id }) => {
      return await School.findOne({ _id: id, deleted: false });
    },
  },
  Mutation: {
    createSchool: async (_, { input }) => {
      const school = new School(input);
      return await school.save();
    },
    updateSchool: async (_, { input }) => {
      const { id, ...updates } = input;
      return await School.findOneAndUpdate({ _id: id, deleted: false }, updates, { new: true });
    },
    deleteSchool: async (_, { id }) => {
      const result = await School.findOneAndUpdate({ _id: id }, { deleted: true });
      return result ? true : false;
    },
  },
  School: {
    students: async (parent) => {
      return await Student.find({ school: parent._id, deleted: false });
    },
  },
};

module.exports = schoolResolvers;
