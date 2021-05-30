const { showBranches } = require('./github/branches')
const { createPR } = require('./github/pr')

module.exports = (robot) => {
  const github = require('githubot')(robot)

  // display branch names for target repo
  robot.respond(/branches ([-_\.a-zA-z0-9\/]+)/i, (msg) => {
    showBranches(github, msg)
  })

  /**
   * create a PR to merge a branch
   * e.g) deploy training-hubot-slack-test/main into deployment/production
   */
  robot.respond(/deploy ([-_\.0-9a-zA-Z]+)(\/([-_\.a-zA-z0-9\/]+))? into (deployment\/([-_\.a-zA-z0-9\/]+))$/i, (msg) => {
    createPR(github, msg)
  })
}