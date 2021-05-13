const { changeLightState, getLightInfo } = require("../src/api/hue")
const config = require("../.private/config")
const { getArgWithDefault } = require("../src/utils/cli")

const states = [
  { bri: 236, hue: 55782, sat: 228 },
  { bri: 236, hue: 47089, sat: 254 },
  { bri: 236, hue: 25600, sat: 254 },
  { bri: 236, hue: 15690, sat: 254 },
  { bri: 254, hue: 65527, sat: 253 },
  { bri: 236, hue: 64952, sat: 170 },
]

const getNextState = (lightInfo) => {
  const currentIndex = states.findIndex(
    (s) =>
      s.bri === lightInfo.state.bri &&
      s.hue === lightInfo.state.hue &&
      s.sat === lightInfo.state.sat
  )
  if (currentIndex === -1) return states[0]
  return states[
    !lightInfo.state.on ? currentIndex : (currentIndex + 1) % states.length
  ]
}

/**
 * Cycles through a list of scenes
 */
;(async () => {
  try {
    const lightId = getArgWithDefault(0, config.lightId)

    const lightInfo = await getLightInfo(lightId)

    const state = getNextState(lightInfo)

    await changeLightState(lightId, {
      on: true,
      ...state,
    })
    console.log(
      `Switched light "${lightInfo.name}" (${lightId}) to Brightness: ${state.bri}, Hue: ${state.hue}, Saturation: ${state.sat}`
    )
  } catch (ex) {
    console.error(ex)
  }
})()
