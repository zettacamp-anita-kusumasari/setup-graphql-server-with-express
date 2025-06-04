// Load environment variables from a `.env` file into `process.env`
require('dotenv').config();

// *************** IMPORT MODULES ***************
// Framework for building web applications
const express = require('express');
// Integrates Apollo Server with Express
const { ApolloServer } = require('apollo-server-express');
// MongoDB object modeling tool
const mongoose = require('mongoose'); 
// GraphQL type definitions
const typeDefs = require('./schema/typeDefs');
// GraphQL resolver functions
const resolvers = require('./schema/resolvers');

// *************** START: Description of the section ***************

// Define an asynchronous function to start the server
const startServer = async () => {
  const app = express();

  // Create a new ApolloServer instance with type definitions and resolvers
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start the ApolloServer
  await server.start();

  // Apply the Apollo GraphQL middleware to the Express app
  server.applyMiddleware({ app });

  // Connect to the MongoDB database using Mongoose
  await mongoose.connect(process.env.MONGODB_URI, {
    // Use the new MongoDB connection string parser
    useNewUrlParser: true,
    // Use the new Server Discover and Monitoring engine
    useUnifiedTopology: true
  });

  // Start the Express server on port 4000
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

// Call the function to start the server
startServer();

// *************** END: Description of the section ***************
