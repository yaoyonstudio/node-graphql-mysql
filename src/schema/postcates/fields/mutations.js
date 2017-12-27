import { GraphQLString, GraphQLInt } from 'graphql'

import PostcateType from '../type'
import { create, update, remove } from '../resolvers'

// Postcate create
export const postcateCreate = {
  type: PostcateType,
  args: {
    title: {
      name: 'title',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Postcate update
export const postcateUpdate = {
  type: PostcateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    title: {
      name: 'title',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Postcate remove
export const postcateRemove = {
  type: PostcateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
