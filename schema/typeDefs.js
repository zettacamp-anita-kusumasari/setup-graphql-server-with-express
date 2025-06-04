const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar Date

  # === TYPES ===
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
    school: School
    deletedAt: Date
  }

  type School {
    id: ID!
    name: String!
    address: String
    students: [Student]
    deletedAt: Date
  }

  # === INPUT TYPES ===
  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: String!
  }

  input UpdateUserInput {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    role: String
  }

  input CreateStudentInput {
    firstName: String!
    lastName: String!
    email: String!
    dateOfBirth: Date
    schoolId: ID!
  }

  input UpdateStudentInput {
    id: ID!
    firstName: String
    lastName: String
    email: String
    dateOfBirth: Date
    schoolId: ID
  }

  input CreateSchoolInput {
    name: String!
    address: String
  }

  input UpdateSchoolInput {
    id: ID!
    name: String
    address: String
  }

  # === QUERIES ===
  type Query {
    getAllUsers: [User]
    getOneUser(id: ID!): User

    getAllStudents: [Student]
    getOneStudent(id: ID!): Student

    getAllSchools: [School]
    getOneSchool(id: ID!): School
  }

  # === MUTATIONS ===
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): User

    createStudent(input: CreateStudentInput!): Student
    updateStudent(input: UpdateStudentInput!): Student
    deleteStudent(id: ID!): Student

    createSchool(input: CreateSchoolInput!): School
    updateSchool(input: UpdateSchoolInput!): School
    deleteSchool(id: ID!): School
  }
`;
