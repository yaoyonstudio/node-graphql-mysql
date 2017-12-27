import { GraphQLInt, GraphQLList } from 'graphql'

import PostcateType from '../type'
import { getAll, getById } from '../resolvers'

// Postcates All
export const postcates = {
  type: new GraphQLList(PostcateType),
  resolve: getAll
}

// Postcate By ID
export const postcate = {
  type: PostcateType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
