const USERS = require('./Database/UsersDB')
const DEPOSITS = require('./Database/DepositsDB')
const WITHDRAWALS = require('./Database/WithdrawalDB')

const resolvers = {
    Query: {
        getUserIdByName: (_, args) => USERS.find(user => args.name === user.username),
        getDeposit: (_, args) => {
            const arrOfArgs = Object.entries(args)
            return DEPOSITS.filter(deposit => arrOfArgs.every((param) => param[1] === deposit[param[0]]))
        },
        getWithdrawal: (_, args) => {
            const arrOfArgs = Object.entries(args)
            return WITHDRAWALS.filter(deposit => arrOfArgs.every((param) => param[1] === deposit[param[0]]))
        },
    },
}

module.exports = resolvers