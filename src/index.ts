export const command = 'bindings [schema]'
export const describe = 'Generate static bindings for the schema and output to a single code file'

import { generateCode} from 'graphql-static-binding'
import { generator as tsgenerator } from 'graphql-static-binding/dist/generators/typescript'
import { generator as jsgenerator } from 'graphql-static-binding/dist/generators/javascript'
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
    typescript: {
        alias: 'ts',
        describe: 'Generate a Typescript code file',
        type: 'boolean'
    },
    javascript: {
        alias: 'js',
        describe: 'Generate a Javascript code file',
        type: 'boolean'
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

    const schema = fs.readFileSync(schemaFile, 'utf-8')

    let finalSchema: string
    if (argv.typescript) {
        context.spinner.start(`Generating Typescript bindings for schema ${chalk.green(path.relative('.', schemaFile))}...`)
        finalSchema = generateCode(schema, tsgenerator)
        context.spinner.succeed()

        const filename = argv.output.endsWith('.ts') ? argv.output : `${argv.output}.ts`
        context.spinner.start(`Writing code to file ${chalk.green(path.relative('.', filename))}...`)
        fs.writeFileSync(filename, finalSchema, { flag })
        context.spinner.succeed()
    }

    if (argv.javascript) {
        context.spinner.start(`Generating Javascript bindings for schema ${chalk.green(path.relative('.', schemaFile))}...`)
        finalSchema = generateCode(schema, jsgenerator)
        context.spinner.succeed()

        const filename = argv.output.endsWith('.js') ? argv.output : `${argv.output}.js`
        context.spinner.start(`Writing code to file ${chalk.green(path.relative('.', filename))}...`)
        fs.writeFileSync(filename, finalSchema, { flag })
        context.spinner.succeed()
    }

}