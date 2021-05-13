const { getLightInfo } = require("../src/api/hue")
const config = require("../.private/config")
const { getArgWithDefault } = require("../src/utils/cli")

/**
 * Gets the information for an individual light
 */
;(async () => {
  try {
    const lightId = getArgWithDefault(0, config.lightId)

    console.log(`Information for light #${lightId}`)

    const lightInfo = await getLightInfo(lightId)

    console.log(lightInfo)
  } catch (ex) {
    console.error(ex)
  }
})()
