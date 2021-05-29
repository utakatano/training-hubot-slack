const random = require('./node/random')

module.exports = (robot) => {
  robot.hear(/random/i, async (res) => {
    const response = await random()
    res.reply(`result is '${response}'`)
  })
}