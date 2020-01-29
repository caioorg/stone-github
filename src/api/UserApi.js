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
