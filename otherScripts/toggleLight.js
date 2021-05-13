const { changeLightState, getLightInfo } = require("../src/api/hue")
const config = require("../.private/config")

;(async () => {
  try {
    const lightInfo = await getLightInfo(config.lightId)
    console.log(lightInfo)

    const turnOn = !lightInfo.state.on
    const lightId = config.lightId

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
