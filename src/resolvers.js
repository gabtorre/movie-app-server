module.exports = {
  Mutation: {
    createPost: async (_source, { text }, { dataSources }) => {
      return dataSources.postAPI.createPost(text)
    },
  },

  Query: {
    post: async (_source, _args, { dataSources }) => {
      return dataSources.postAPI.getPost()
    },
  },
}
