const { Postcate } = require('../../models')

// Get postcate by ID
export async function getById (parentValue, { id }) {
  const postcate = await Postcate.findOne({ where: { id } })
  return postcate
}

// Get all postcate
export async function getAll () {
  const postcates = await Postcate.findAll()
  return postcates
}

// Create postcate
export async function create (parentValue, { title, description }) {
  const postcate = await Postcate.create({
    title,
    description
  })
  return postcate
}

// Update postcate
export async function update (parentValue, { id, title, description }) {
  const postcate = await Postcate.update({
    title,
    description
  }, { where: { id } })
  return postcate
}

// Delete postcate
export async function remove (parentValue, { id }) {
  const postcate = await Postcate.destroy({ where: { id } })
  return postcate
}
