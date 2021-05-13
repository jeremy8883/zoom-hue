const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")

const getCliArgs = () => {
  return yargs(hideBin(process.argv)).argv
}

module.exports = {
  getCliArgs,
}
