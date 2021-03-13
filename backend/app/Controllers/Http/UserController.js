'use strict'

const User = use('App/Models/User')

class UserController {

  async register({request}) {
    const data = await request.only(['username', 'email', 'password'])

    const userCrate = User.create(data)

    return userCrate
  }

  async login({request, auth}) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }

  async list() {
    const listUser = await User.all()
    
    return listUser
  }

  async deleteUser({params}) {
    const user = await User.findOrFail(params.id)

    const userDeleted = await user.delete()

    return userDeleted
  }

}

module.exports = UserController
