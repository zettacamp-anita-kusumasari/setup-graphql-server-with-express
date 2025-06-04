type Student {
  id: ID!
  name: String!
  email: String!
  school: School
}

input CreateStudentInput {
  name: String!
  email: String!
  schoolId: ID!
}

input UpdateStudentInput {
  id: ID!
  name: String
  email: String
  schoolId: ID
}

type School {
  id: ID!
  name: String!
  address: String!
  students: [Student!]!
}

input CreateSchoolInput {
  name: String!
  address: String!
}

input UpdateSchoolInput {
  id: ID!
  name: String
  address: String
}

extend type Query {
  getAllStudents: [Student!]!
  getStudentById(id: ID!): Student
  getAllSchools: [School!]!
  getSchoolById(id: ID!): School
}

extend type Mutation {
  createStudent(input: CreateStudentInput!): Student!
  updateStudent(input: UpdateStudentInput!): Student!
  deleteStudent(id: ID!): Boolean!

  createSchool(input: CreateSchoolInput!): School!
  updateSchool(input: UpdateSchoolInput!): School!
  deleteSchool(id: ID!): Boolean!
}
