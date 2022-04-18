import * as core from '@actions/core'
import * as fs from 'fs'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    const json: string = core.getInput('json')
    const fileName: string = core.getInput('fileName')

    core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    core.info(`Found filename: ${fileName}`)
    core.info(`Found json: ${json}`)

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    fs.writeFileSync(fileName, json)
    core.info(`File written successfully`)

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
