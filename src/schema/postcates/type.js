import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import PostType from '../posts/type'

// Postcate type
const PostcateType = new GraphQLObjectType({
  name: 'postcate',
  description: '...',

  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    posts: {
      type: new GraphQLList(PostType),
      description: '分类中所有文章',
      resolve (postcate) {
        return postcate.getPosts()
      }
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default PostcateType
