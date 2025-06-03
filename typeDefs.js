
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: String!
    deletedAt: Date
  }

  type Student {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    dateOfBirth: Date
    schoolId: ID!
    deletedAt: Date
  }

  type School {
    id: ID!
    name: String!
    address: String
    students: [Student]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User

    students: [Student!]!
    student(id: ID!): Student

    schools: [School!]!
    school(id: ID!): School
  }
`;

module.exports = typeDefs;
