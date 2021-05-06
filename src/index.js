const { changeLightState, getLightInfo, getAllLights } = require("./api/hue")
const config = require("../.private/config")
const colors = require("./constants/colors")
const { watchProcess } = require("./watchProcess")

const onMeetingStarted = async () => {
  console.log("You are on air!")
  try {
    await changeLightState(config.lightId, {
      on: true,
      ...colors.onAir,
    })
  } catch (ex) {
    console.error(ex)
  }
}

const onMeetingEnded = async () => {
  console.log("Meeting ended")
  try {
    await changeLightState(config.lightId, {
      on: false,
    })
  } catch (ex) {
    console.error(ex)
  }
}

;(async () => {
  // Debug commands
  // const allLights = await getAllLights()
  // console.log(allLights)
  // const info = await getLightInfo(config.lightId)
  // console.log(info)

  console.log("Zoom Hue watcher started")
  await watchProcess("zoom.us", onMeetingStarted, onMeetingEnded)
})()
