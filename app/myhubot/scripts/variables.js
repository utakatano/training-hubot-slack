const displayVariables = (data) => {
  const text = Object.keys(data).reduce((acc, key) => {
    acc += `- ${key}: ${data[key]}\n`
    return acc
  }, '')
  
  return {
    text
  }
}

module.exports = (robot) => {
  robot.hear(/variables/i, (res) => {
    res.reply(displayVariables(process.env))
  })
}