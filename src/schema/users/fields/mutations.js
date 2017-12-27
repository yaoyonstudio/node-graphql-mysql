import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import UserType from '../type'
import { create, update, remove } from '../resolvers'

// User create
export const userCreate = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },
    email: {
      name: 'email',
      type: GraphQLString
    }
  },
  resolve: create
}

// User update
export const userUpdate = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    name: {
      name: 'name',
      type: GraphQLString
    },
    email: {
      name: 'email',
      type: GraphQLString
    }
  },
  resolve: update
}

// User remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
