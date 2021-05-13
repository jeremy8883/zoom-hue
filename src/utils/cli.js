const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")

const getCliArgs = () => {
  return yargs(hideBin(process.argv)).argv
}

const getArgWithDefault = (index, d) => {
  const argv = getCliArgs()
  return argv._[index] != null ? `${argv._[index]}` : d
}

module.exports = {
  getCliArgs,
  getArgWithDefault,
}
