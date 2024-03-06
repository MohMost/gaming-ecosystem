import {gql} from "apollo-server-micro"
import { z } from "zod"
// ecrit moi un schema graphql
const typeDefs = gql`
  type User {
    id: String!
    createdAt: Int!
    updatedAt: Int!
    email: String!
    password: String!
    userName: String!
 
    image: String
  }
  
  type Query {
    users : [User]!
  }

`;

export default typeDefs;