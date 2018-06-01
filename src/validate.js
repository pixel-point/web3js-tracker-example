const Decimal = require('decimal.js')
const WEI = 1000000000000000000

const ethToWei = (amount) => new Decimal(amount).times(WEI)


function validateTransaction(trx) {
  const toValid = trx.to !== null
  if (!toValid) return false
  
  const walletToValid = trx.to.toLowerCase() === process.env.WALLET_TO.toLowerCase()
  const walletFromValid = trx.from.toLowerCase() === process.env.WALLET_FROM.toLowerCase()
  const amountValid = ethToWei(process.env.AMOUNT).equals(trx.value)


  return toValid && walletToValid && walletFromValid && amountValid
}

module.exports = validateTransaction