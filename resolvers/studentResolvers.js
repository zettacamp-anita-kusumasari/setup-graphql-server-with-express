const Student = require('../models/Student');

const studentResolvers = {
  Query: {
    getAllStudents: async () => {
      return await Student.find({ deleted: false });
    },
    getStudentById: async (_, { id }) => {
      return await Student.findOne({ _id: id, deleted: false });
    },
  },
  Mutation: {
    createStudent: async (_, { input }) => {
      const student = new Student({
        name: input.name,
        email: input.email,
        school: input.schoolId,
      });
      return await student.save();
    },
    updateStudent: async (_, { input }) => {
      const { id, ...updates } = input;
      if (updates.schoolId) {
        updates.school = updates.schoolId;
        delete updates.schoolId;
      }
      return await Student.findOneAndUpdate({ _id: id, deleted: false }, updates, { new: true });
    },
    deleteStudent: async (_, { id }) => {
      const result = await Student.findOneAndUpdate({ _id: id }, { deleted: true });
      return result ? true : false;
    },
  },
  Student: {
    school: async (parent, _, { loaders }) => {
      return loaders.schoolLoader.load(parent.school.toString());
    },
  },
};

module.exports = studentResolvers;
