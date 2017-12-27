import { GraphQLObjectType } from 'graphql'

// App Imports
import * as users from './users/fields/mutations'
import * as postcates from './postcates/fields/mutations'
import * as posts from './posts/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...users,
    ...postcates,
    ...posts
  }
})

export default mutation
