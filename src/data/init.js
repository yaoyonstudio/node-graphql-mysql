const request = require('request')
const api = 'http://localhost:3001/graphql'
const data = require('./db.json')

// 初始化文章
if (data && data.posts && data.posts.length) {
  data.posts.map(post => {
    request.post({
      url: api,
      form: {
        query: `mutation { postCreate( title: "${post.title}", author: 1, cate: 2, excerpt: "${post.excerpt}", source: "${post.source}", featured_img: "${post.featured_img}", thumb_up: ${post.thumb_up}, thumb_down: ${post.thumb_down}, content: "${post.content}" ) { id } }`
      },
      json: true
    }, (err, httpResponse, body) => {
      console.log('Error:', err)
      // console.log(httpResponse)
      console.log(`\nPost: ${post.id} created.\n`)
    })
  })
}

// request.post({
//   url: api,
//   form: {
//     query: `mutation { postCreate( title: "1111111", author: 1, cate: 1, excerpt: "22222", content: "3333" ) { id } }`
//     // query: `{ posts { id, title, author, cate, cateinfo { id, title, description }, excerpt, content, createdAt, updatedAt } }`
//   },
//   json: true
// }, (err, httpResponse, body) => {
//   console.log('Error:', err)
//   console.log(body)
// })

// request.post({
//   url: api,
//   form: {
//     query: '{ posts { id, title, author, cate, cateinfo { id, title, description }, excerpt, content, createdAt, updatedAt } }'
//   },
//   json: true
// }, (err, httpResponse, body) => {
//   console.log('Error:', err)
//   console.log(body.data.posts)
// })
