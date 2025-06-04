type User {
  id: ID!
  name: String!
  email: String!
}

input CreateUserInput {
  name: String!
  email: String!
}

input UpdateUserInput {
  id: ID!
  name: String
  email: String
}

type Query {
  getAllUsers: [User!]!
  getUserById(id: ID!): User
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
}
