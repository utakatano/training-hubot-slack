exports.showBranches = (gh, msg) => {
  const repo = msg.match[1]

  gh.branches(`${process.env.USERNAME}/${repo}`, (branches) => {
    msg.send({text: branches.map((branch) => `- ${branch.name}`).join('\n')})
  })
  
  gh.handleErrors((res) => {
    switch (res.statusCode) {
      case 404:
        msg.send(`'${repo}' repository does not exist (error code: ${res.statusCode})`)
        break
      default:
        msg.send(`unknown error (error code: ${res.statusCode})`)
    }
  })
}