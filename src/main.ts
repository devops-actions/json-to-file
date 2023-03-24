import * as core from '@actions/core'
import * as fs from 'fs'
import * as path from 'path'

async function run(): Promise<void> {
  try {
    const json: string = core.getInput('json')
    const fileName: string = core.getInput('fileName')

    core.info(`Found filename: ${fileName}`)
    core.info(`Found json: ${json}`)

    const filePath = path.resolve(fileName)
    fs.writeFileSync(filePath, json)
    core.info(`File written successfully`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
