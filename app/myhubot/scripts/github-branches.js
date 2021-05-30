module.exports = (robot) => {
  const github = require('githubot')(robot)

  robot.respond(/branches ([-_\.a-zA-z0-9\/]+)/i, (msg) => {
    const repo = msg.match[1]

    github.branches(`${process.env.USERNAME}/${repo}`, (branches) => {
      msg.send({text: branches.map((branch) => `- ${branch.name}`).join('\n')})
    })
    
    github.handleErrors((res) => {
      switch (res.statusCode) {
        case 404:
          msg.send(`'${repo}' repository does not exist (error code: ${res.statusCode})`)
          break
        default:
          msg.send(`unknown error (error code: ${res.statusCode})`)
      }
    })
  })
}