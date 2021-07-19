const USERS = require('./Database/UsersDB')
const DEPOSITS = require('./Database/DepositsDB')
const WITHDRAWALS = require('./Database/WithdrawalDB')

const searchItems = (DB) => {
    return ({filter}) => {
        const arrOfArgs = Object.entries(filter)
        return DB.filter(deposit => arrOfArgs.every((param) => {
            console.log(param[0], param[1])

            if (Array.isArray(param[1])) {
                return param[1].includes(deposit[param[0]])
            }

            return param[1] === deposit[param[0]]
        }))
    }
}
const searchDeposits = searchItems(DEPOSITS)
const searchWithdrawals = searchItems(WITHDRAWALS)

const resolvers = {
    Query: {
        UserIdByName: (_, args) => USERS.find(user => args.name === user.username),
        Withdrawals: (_, args) => searchWithdrawals(args),
        Deposits: (_, args) => searchDeposits(args),
    },
}

module.exports = resolvers