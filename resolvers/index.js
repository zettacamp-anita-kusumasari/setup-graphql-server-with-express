const userResolvers = require('./userResolvers');
const studentResolvers = require('./studentResolvers');
const schoolResolvers = require('./schoolResolvers');

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...studentResolvers.Query,
    ...schoolResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...studentResolvers.Mutation,
    ...schoolResolvers.Mutation,
  },
  User: {},
  Student: studentResolvers.Student,
  School: schoolResolvers.School,
};
