const { changeLightState, getLightInfo } = require("./api/hue")
const config = require("../.private/config")

;(async () => {
  const info = await getLightInfo(config.lightId)
  console.log(info)
  await changeLightState(config.lightId, { on: false })
})()
