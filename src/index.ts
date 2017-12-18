export const command = 'bundle [schema]'
export const describe = 'Process import statements in a schema and output a single schema file'

import { importSchema } from 'graphql-import';
import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

export const builder = {
    schema: {
        describe: 'Schema file to process',
        requiresArg: true,
        type: 'string'
    },
    output: {
        alias: 'o',
        describe: 'Filename of output schema',
        demandOption: true,
        requiresArg: true,
        type: 'string',
    },
    force: {
        alias: 'f',
        describe: 'Force overwriting exissting output file',
        type: 'boolean'
    }
}

export const handler = async (context, argv) => {
    const schema: string = argv.schema || context.getProjectConfig().schemaPath

    context.spinner.start(`Processing schema ${chalk.green(path.relative('.', schema))}...`)
    const finalSchema = importSchema(schema)
    context.spinner.succeed()

    const flag = argv.force ? 'w' : 'wx'
    context.spinner.start(`Writing schema to file ${chalk.green(path.relative('.', argv.output))}...`)
    fs.writeFile(argv.output, finalSchema, { flag }, err => {
        if (err) {
            context.spinner.fail()
            console.log(chalk.red(err.message))
        } else {
            context.spinner.succeed()
        }
    })

}