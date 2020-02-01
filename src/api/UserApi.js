import instance from './index'

class User {
  static async getUser(user) {
    let status = {}
    await instance
      .get(`/users/${user}`)
      .then(e => {
        if (e.status === 200) status = { error: false, data: e.data }
      })
      .catch(err => {
        status = { error: true, message: err }
      })

    return status
  }

  static async getBibliographyUser(user) {
    let status = {}

    await instance.get(`/users/${user}`).then(e => {
      if (e.status === 200) {
        status = {
          error: false,
          data: {
            id: e.data.id,
            login: e.data.login,
            avatar_url: e.data.avatar_url,
            html_url: e.data.html_url,
            name: e.data.name,
            company: e.data.company,
            location: e.data.location,
            bio: e.data.bio,
            public_repos: e.data.public_repos,
            followers: e.data.followers,
            email: e.data.email,
            following: e.data.following
          }
        }
      }
    })

    return status
  }

  static async getUserRepositories(user) {
    let status = {}
    await instance
      .get(`/users/${user}/repos`)
      .then(e => {
        if (e.status === 200) status = { error: false, data: e.data }
      })
      .catch(err => {
        status = { error: true, message: err }
      })
    return status
  }
}

export default User
