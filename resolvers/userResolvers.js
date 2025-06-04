const User = require('../models/User');

const userResolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find({ deleted: false });
    },
    getUserById: async (_, { id }) => {
      return await User.findOne({ _id: id, deleted: false });
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const newUser = new User(input);
      return await newUser.save();
    },
    updateUser: async (_, { input }) => {
      const { id, ...updates } = input;
      return await User.findOneAndUpdate({ _id: id, deleted: false }, updates, { new: true });
    },
    deleteUser: async (_, { id }) => {
      const result = await User.findOneAndUpdate({ _id: id }, { deleted: true });
      return result ? true : false;
    },
  },
};

module.exports = userResolvers;
