const {gql} = require('apollo-server')

const typeDefs = gql(`

    type User {
        id: ID
        username: String
    }
    
    input UserInput {
        id: ID
        username: String!
    }
    
    type Deposit {
        id: ID
        playerId: ID
        status: String
        currency: String
        isLocked: Boolean
    }
    
    type Withdrawal {
        id: ID
        playerId: ID
        status: String
        currency: String
        isLocked: Boolean
    }
    
    type Query {
        getUserIdByName(name: String): User
        getWithdrawal(
            id: ID
            playerId: ID
            status: String
            currency: String
            isLocked: Boolean
        ): [Withdrawal]!
        getDeposit(
            id: ID
            playerId: ID
            status: String
            currency: String
        ): [Deposit]!
    }
`)

module.exports = typeDefs