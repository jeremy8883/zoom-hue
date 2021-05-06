const config = require("../../.private/config")
const path = require("path")
const fetch = require("node-fetch")

// GET /api/1028d66426293e821ecfd9ef1a0731df/lights

const adaptResponse = async (response) => {
  return {
    data: await response.json(),
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    redirected: response.redirected,
    url: response.url,
  }
}

const hueFetch = async (method, apiPath, options) => {
  const address =
    config.hostAddress + path.join("api", config.username, apiPath)
  const resp = await fetch(address, {
    ...options,
    method,
  })
  if (!resp.ok) {
    throw Object.assign(
      new Error(resp.statusText || `Error status: ${resp.status}`),
      {
        response: await adaptResponse(resp),
      }
    )
  }
  return await adaptResponse(resp)
}

const getLightInfo = async (id) => {
  return await hueFetch("GET", `/lights/${id}`)
}

/**
 * @param state {
 *   on?: boolean,
 *   sat?: number,
 *   bri?: number,
 *   hue?: number,
 * }
 */
const changeLightState = async (id, state) => {
  return await hueFetch("PUT", `/lights/${id}/state`, {
    body: JSON.stringify(state),
  })
}

module.exports = {
  getLightInfo,
  changeLightState,
}
