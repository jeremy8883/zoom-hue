const { getLightInfo } = require("../src/api/hue")
const config = require("../.private/config")
const { getCliArgs } = require("../src/utils/cli")

/**
 * Gets the information for an individual light
 */
;(async () => {
  try {
    const argv = getCliArgs()
    const lightId = argv.light != null ? `${argv.light}` : config.lightId

    console.log(`Information for light #${lightId}`)

    const lightInfo = await getLightInfo(lightId)

    console.log(lightInfo)
  } catch (ex) {
    console.error(ex)
  }
})()
