const { changeLightState, getLightInfo } = require("../src/api/hue")
const config = require("../.private/config")
const { getArgWithDefault } = require("../src/utils/cli")

/**
 * Turn a light on/off
 */
;(async () => {
  try {
    const lightId = getArgWithDefault(0, config.lightId)

    const lightInfo = await getLightInfo(lightId)

    const turnOn = !lightInfo.state.on

    await changeLightState(lightId, {
      on: turnOn,
    })
    console.log(
      `Light "${lightInfo.name}" (${lightId}) turned ${turnOn ? "on" : "off"}`
    )
  } catch (ex) {
    console.error(ex)
  }
})()
