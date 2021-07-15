const USERS = require('./Database/UsersDB')
const DEPOSITS = require('./Database/DepositsDB')
const WITHDRAWALS = require('./Database/WithdrawalDB')

const searchItems = (DB) => {
    return (args) => {
        const arrOfArgs = Object.entries(args)
        return DB.filter(deposit => arrOfArgs.every((param) => {
            if (Array.isArray(param[1])) {
                return param[1].includes(deposit[param[0]])
            }

            return param[1] === deposit[param[0]]
        }))
    }
}
const DepositsDBBind = searchItems(DEPOSITS)
const WithdrawalsDBBind = searchItems(WITHDRAWALS)

const resolvers = {
    Query: {
        UserIdByName: (_, args) => USERS.find(user => args.name === user.username),
        Withdrawals: (_, args) => WithdrawalsDBBind(args),
        Deposits: (_, args) => DepositsDBBind(args),
    },
}

module.exports = resolvers