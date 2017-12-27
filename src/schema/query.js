import { GraphQLObjectType } from 'graphql'

import * as users from './users/fields/query'
import * as postcates from './postcates/fields/query'
import * as posts from './posts/fields/query'

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...users,
    ...postcates,
    ...posts
  })
})

export default query
