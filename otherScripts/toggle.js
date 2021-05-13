const { changeLightState, getLightInfo } = require("../src/api/hue")
const config = require("../.private/config")
const { getCliArgs } = require("../src/utils/cli")

;(async () => {
  try {
    const argv = getCliArgs()
    const lightId = `${argv.light}` || config.lightId

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
