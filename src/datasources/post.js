const { RESTDataSource } = require('apollo-datasource-rest')

class postAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-movie-app-fe361.cloudfunctions.net/'
  }

  async createPost(text) {
    return this.post(`createPost`, JSON.stringify( {text} ))
  }

  async getPost() {
    return this.get(`post`)
  }
}

module.exports = postAPI
