const { GraphQLServer } = require('graphql-yoga')
// import { GraphQLServer } from 'graphql-yoga' 
// const { schema } = require('./schema')
import { schema } from './schema'
// const { createContext } = require('./context')
import { createContext } from './context'

const server = new GraphQLServer({
  schema,
  context: createContext
})

server.start().then(() => console.log('Serve running on http://localhost:4000'))