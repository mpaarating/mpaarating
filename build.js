'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.cyan('               Alex Lewis'),
  handle: chalk.white('mpaarating'),
  work: chalk.white('Senior Software Engineer at Your Money Line'),
  blueSky: chalk.green('https://bsky.app/profile/') + chalk.cyan('alexmlewis.com'),
  npm: chalk.green('https://npmjs.com/') + chalk.red('~mpaarating'),
  github: chalk.green('https://github.com/') + chalk.yellow('mpaarating'),
  linkedin: chalk.green('https://linkedin.com/in/') + chalk.blue('alex-lewis-2157759b/'),
  web: chalk.cyan('https://blog.alexmlewis.com'),
  npx: chalk.blueBright('npx') + ' ' + chalk.white('mpaarating'),
  labelWork: chalk.white.bold('       Work:'),
  labelBlueSky: chalk.white.bold('    BlueSky:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const blueskying = `${data.labelBlueSky}  ${data.blueSky}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  blueskying + newline + // data.labelBlueSky + data.blueSky
  npming + newline + // data.labelnpm + data.npm
  githubing + newline + // data.labelGitHub + data.github
  linkedining + newline + // data.labelLinkedIn + data.linkedin
  webing + newline + newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
