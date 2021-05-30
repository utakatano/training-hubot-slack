module.exports = (robot) => {
  const github = require('githubot')(robot)

  const url_api_base = process.env.HUBOT_GITHUB_API || 'https://api.github.com'

  robot.respond(/deploy ([-_\.0-9a-zA-Z]+)(\/([-_\.a-zA-z0-9\/]+))? into (deployment\/([-_\.a-zA-z0-9\/]+))$/i, (msg) => {
    const repo = msg.match[1]
    const head = msg.match[3] || 'master'
    const base = msg.match[4]
    const environment = msg.match[5]

    const url = `${url_api_base}/repos/${process.env.USERNAME}/${repo}/pulls`
    const account_name = msg.envelope.user.name || 'anonymous'
    const channel_name = msg.envelope.room || 'anonymous'
    const title = `${environment} deployment by ${account_name}`

    const body = `
    ・Created By ${account_name} on ${channel_name} Channel
    `

    const data = {
      title,
      body,
      head,
      base
    }

    github.post(url, data, (pull) => {
      msg.send(`Created Pull Request!
      ${pull.html_url}
      `)
    })
  })
}