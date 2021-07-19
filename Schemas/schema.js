const {gql} = require('apollo-server')

const typeDefs = gql(`
    enum DepositStatus {
        INITIATED
        FAILED
        CONFIRMED
        PROCESSING
        CANCELLED
        DECLINED
    }

    enum WithdrawalStatus {
        INITIATED
        FAILED
        IN_PROGRESS
        CANCELLED
        PENDING
        DECLINED
        PROCESSING
        CONFIRMED
    }

    type User {
        id: ID!
        username: String!
    }
    
    type Deposit {
        id: ID!
        playerId: ID!
        status: DepositStatus!
        currency: String!
    }
    
    input DepositFilters {
         id: ID
         playerId: ID
         status: [DepositStatus!]
         currency: [String!]
    }
    
    type Withdrawal {
        id: ID
        playerId: ID
        status: WithdrawalStatus
        currency: String
        isLocked: Boolean
    }
    
    input WithdrawalFilters {
         id: ID
         playerId: ID
         status: [WithdrawalStatus!]
         currency: [String!]
         isLocked: Boolean
    }
    
    type Query {
        UserIdByName(name: String!): User
        Withdrawals(filter: WithdrawalFilters): [Withdrawal]!
        Deposits(filter: DepositFilters): [Deposit]!
    }
`)

module.exports = typeDefs