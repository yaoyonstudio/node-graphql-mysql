// import User from '../../models'
const { User } = require('../../models')

// Get user by ID
export async function getById (parentValue, { id }) {
  const user = await User.findOne({ where: { id } })
  return user
}

// Get all user
export async function getAll () {
  const users = await User.findAll()
  return users
}

// Create user
export async function create (parentValue, { name, email }) {
  const user = await User.create({
    name,
    email
  })
  return user
}

// Update user
export async function update (parentValue, { id, name, email }) {
  const user = await User.update({
    name,
    email
  }, { where: { id } })
  return user
}

// Delete user
export async function remove (parentValue, { id }) {
  const user = await User.destroy({ where: { id } })
  return user
}
