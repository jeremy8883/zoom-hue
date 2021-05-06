const { changeLightState, getLightInfo, getAllLights } = require("./api/hue")
const config = require("../.private/config")
const colors = require("./constants/colors")
const { watchProcess } = require("./watchProcess")

const onMeetingStarted = async () => {
  console.log("You are on air!")
  await changeLightState(config.lightId, {
    on: true,
    ...colors.onAir,
  })
}

const onMeetingEnded = async () => {
  console.log("Meeting ended")
  await changeLightState(config.lightId, {
    on: false,
  })
}

;(async () => {
  // Debug commands
  // const allLights = await getAllLights()
  // console.log(allLights)
  // const info = await getLightInfo(config.lightId)
  // console.log(info)

  await watchProcess("zoom.us", onMeetingStarted, onMeetingEnded)
})()
