import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import config from './config'

const app = express()
const { sequelize } = require('./models')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(morgan('combined'))

app.use('/graphql', (req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: config.ide,
  pretty: config.pretty
})))

sequelize.sync()
  .then(() => {
    app.listen(config.port, 'localhost')
    console.log(`\nServer listen at http://localhost:${config.port}\n`)
  })
