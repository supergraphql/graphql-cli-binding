export const command = 'bindings [schema]'
export const describe = 'Generate static bindings for the schema and output to a single code file'

import { generateCode} from 'graphql-static-binding'
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
        describe: 'Filename of output code file',
        demandOption: true,
        requiresArg: true,
        type: 'string'
    },
    generator: {
        alias: 'g',
        describe: 'Generator used to generate binding files',
        type: 'string'
    },
    force: {
        alias: 'f',
        describe: 'Force overwriting exissting output file',
        type: 'boolean'
    }
}

export const handler = async (context, argv) => {
    const schemaFile: string = argv.schema || context.getProjectConfig().schemaPath
    const flag = argv.force ? 'w' : 'wx'

    context.spinner.start(`Loading schema ${chalk.green(path.relative('.', schemaFile))}...`)
    const schema = fs.readFileSync(schemaFile, 'utf-8')
    context.spinner.succeed(`Loaded schema ${chalk.green(path.relative('.', schemaFile))}`)

    context.spinner.start(`Generating bindings using generator ${chalk.green(argv.generator)}...`)
    const finalSchema: string = generateCode(schema, argv.generator)
    context.spinner.succeed(`Generated bindings using generator ${chalk.green(argv.generator)}`)

    context.spinner.start(`Writing code to file ${chalk.green(path.relative('.', argv.output))}...`)
    fs.writeFileSync(argv.output, finalSchema, { flag })
    context.spinner.succeed(`Written code to file ${chalk.green(path.relative('.', argv.output))}`)

}