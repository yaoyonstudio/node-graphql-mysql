import { GraphQLInt, GraphQLList } from 'graphql'

import PostType from '../type'
import { getAll, getById } from '../resolvers'

// Posts All
export const posts = {
  type: new GraphQLList(PostType),
  resolve: getAll
}

// Post By ID
export const post = {
  type: PostType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
