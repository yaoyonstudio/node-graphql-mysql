const { Post } = require('../../models')

// Get post by ID
export async function getById (parentValue, { id }) {
  const post = await Post.findOne({ where: { id } })
  return post
}

// Get all post
export async function getAll () {
  const posts = await Post.findAll()
  return posts
}

// Create post
export async function create (parentValue, { title, author, cate, excerpt, source, featured_img, thumb_up, thumb_down, content }) {
  const post = await Post.create({
    title,
    author,
    cate,
    excerpt,
    source,
    featured_img,
    thumb_up,
    thumb_down,
    content
  })
  return post
}

// Update post
export async function update (parentValue, { id, title, author, cate, excerpt, source, featured_img, thumb_up, thumb_down, content }) {
  const post = await Post.update({
    title,
    author,
    cate,
    excerpt,
    source,
    featured_img,
    thumb_up,
    thumb_down,
    content
  }, { where: { id } })
  return post
}

// Delete post
export async function remove (parentValue, { id }) {
  const post = await Post.destroy({ where: { id } })
  return post
}
