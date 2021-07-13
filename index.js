const {ApolloServer} = require('apollo-server')
const typeDefs = require('./Schemas/schema')
const resolvers = require('./resolvers')
const port = require('./settings')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({port}).then(({url}) => {
    console.log(`Server started at ${url}`)
})