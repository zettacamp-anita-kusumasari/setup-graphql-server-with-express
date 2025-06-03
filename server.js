
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const { User, Student, School } = require('./models');

const app = express();

const resolvers = {
  Query: {
    users: () => User.find({ deletedAt: null }),
    user: (_, { id }) => User.findById(id),

    students: () => Student.find({ deletedAt: null }),
    student: (_, { id }) => Student.findById(id),

    schools: () => School.find({ deletedAt: null }),
    school: async (_, { id }) => {
      const school = await School.findById(id);
      return school;
    },
  },

  School: {
    students: (parent) => Student.find({ schoolId: parent.id, deletedAt: null }),
  },
};

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  await mongoose.connect('mongodb://localhost:27017/yourdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
