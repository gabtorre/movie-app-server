const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
  type Post {
    id: ID!
    text: String!
  }

  type Mutation {
    createPost(text: String!): Post
  }

  type Query {
    post: [Post]
  }
`
