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
  robot.hear(/info/i, (res) => {
    res.reply(displayVariables(process.env))
  })
}