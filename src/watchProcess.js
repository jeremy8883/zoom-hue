const psList = require("ps-list")
const { delay } = require("./utils/timeout")

const watchProcess = async (processName, onOpen, onClose) => {
  while (true) {
    const processes = await psList()
    const process = processes.find((p) => p.name.indexOf(processName) !== -1)
    await delay(1000)

    if (!process) {
      continue
    }

    const pid = process.pid
    await onOpen()

    while (true) {
      await delay(1000)

      const processes = await psList()

      if (!processes.find((p) => p.pid === pid)) {
        await onClose()
        break
      }
    }
  }
}

module.exports = {
  watchProcess,
}
