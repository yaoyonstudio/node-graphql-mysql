import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import PostcateType from '../postcates/type'

// Post type
const PostType = new GraphQLObjectType({
  name: 'post',
  description: 'post type',

  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    author: { type: GraphQLInt },
    cate: { type: GraphQLInt },
    cateinfo: {
      type: PostcateType,
      description: '文章所属分类信息',
      resolve (post) {
        return post.getPostcate()
      }
    },
    excerpt: { type: GraphQLString },
    source: { type: GraphQLString },
    featured_img: { type: GraphQLString },
    thumb_up: { type: GraphQLInt },
    thumb_down: { type: GraphQLInt },
    content: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default PostType
