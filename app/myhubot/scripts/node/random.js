
const random = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return Math.random()
}

module.exports = random