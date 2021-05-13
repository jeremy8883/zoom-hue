const { getAllLights, getAllGroups } = require("../src/api/hue")
const R = require("ramda")

const getRoomNameByLightId = (groups, lightId) => {
  const [groupId, group] =
    Object.entries(groups).find(([id, room]) => {
      console.log(room, lightId)
      return room.lights.includes(lightId)
    }) || []
  return group ? group.name : "-"
}

;(async () => {
  try {
    const lights = await getAllLights()
    const groups = await getAllGroups()

    const data = R.mapObjIndexed(
      (light, lightId) => ({
        Name: light.name,
        Room: getRoomNameByLightId(groups, lightId),
        State: light.state.on ? "on" : "off",
        Available: light.state.reachable ? "available" : "unavailable",
      }),
      lights
    )
    console.table(data)
  } catch (ex) {
    console.error(ex)
  }
})()
