const { gql } = require('apollo-server-express');

module.exports = gql`
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
    deletedAt: Date
  }

  type Query {
    users: [User]
    user(id: ID!): User
    students: [Student]
    student(id: ID!): Student
    schools: [School]
    school(id: ID!): School
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!, role: String!): User
    updateUser(id: ID!, firstName: String, lastName: String, email: String, role: String, password: String): User
    deleteUser(id: ID!): User

    createStudent(firstName: String!, lastName: String!, email: String!, dateOfBirth: Date, schoolId: ID!): Student
    updateStudent(id: ID!, firstName: String, lastName: String, email: String, dateOfBirth: Date, schoolId: ID): Student
    deleteStudent(id: ID!): Student

    createSchool(name: String!, address: String): School
    updateSchool(id: ID!, name: String, address: String): School
    deleteSchool(id: ID!): School
  }
`;