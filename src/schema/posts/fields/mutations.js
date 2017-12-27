import { GraphQLString, GraphQLInt } from 'graphql'

import PostType from '../type'
import { create, update, remove } from '../resolvers'

// Post create
export const postCreate = {
  type: PostType,
  args: {
    title: {
      name: 'title',
      type: GraphQLString
    },
    author: {
      name: 'author',
      type: GraphQLInt
    },
    cate: {
      name: 'cate',
      type: GraphQLInt
    },
    excerpt: {
      name: 'excerpt',
      type: GraphQLString
    },
    source: {
      name: 'source',
      type: GraphQLString
    },
    featured_img: {
      name: 'featured_img',
      type: GraphQLString
    },
    thumb_up: {
      name: 'thumb_up',
      type: GraphQLInt
    },
    thumb_down: {
      name: 'thumb_down',
      type: GraphQLInt
    },
    content: {
      name: 'content',
      type: GraphQLString
    }
  },
  resolve: create
}

// Post update
export const postUpdate = {
  type: PostType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    title: {
      name: 'title',
      type: GraphQLString
    },
    author: {
      name: 'author',
      type: GraphQLInt
    },
    cate: {
      name: 'cate',
      type: GraphQLInt
    },
    excerpt: {
      name: 'excerpt',
      type: GraphQLString
    },
    source: {
      name: 'source',
      type: GraphQLString
    },
    featured_img: {
      name: 'featured_img',
      type: GraphQLString
    },
    thumb_up: {
      name: 'thumb_up',
      type: GraphQLInt
    },
    thumb_down: {
      name: 'thumb_down',
      type: GraphQLInt
    },
    content: {
      name: 'content',
      type: GraphQLString
    }
  },
  resolve: update
}

// Post remove
export const postRemove = {
  type: PostType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
