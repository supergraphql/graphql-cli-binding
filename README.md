# graphql-cli-binding [![npm](https://img.shields.io/npm/v/graphql-cli-binding.svg?style=for-the-badge)]() 
[![CircleCI](https://img.shields.io/circleci/project/github/supergraphql/graphql-cli-binding.svg?style=for-the-badge)]()[![David](https://img.shields.io/david/supergraphql/graphql-cli-binding.svg?style=for-the-badge)]()[![Greenkeeper badge](https://img.shields.io/badge/Greenkeeper-enabled-brightgreen.svg?style=for-the-badge)](https://greenkeeper.io/)  
Plugin for [`graphql-cli`](https://github.com/graphql-cli/graphql-cli). Generates static bindings for any GraphQL schema using [`graphql-static-binding`](https://github.com/supergraphql/graphql-static-binding) (WIP!) and outputs a code file.

## Installation

Install `graphql-cli-binding` either globally (recommended) or locally using your favorite package manager:
```shell
$ yarn [global] add graphql-cli-binding
$ npm install graphql-cli-binding [--global]
```

## Usage
```
graphql bindings [schema]

Generate static bindings for the schema and output to a single code file

Options:
  --dotenv            Path to .env file                                 [string]
  -p, --project       Project name                                      [string]
  --schema            Schema file to process                            [string]
  --output, -o        Filename of output code file           [string] [required]
  --typescript, --ts  Generate a Typescript code file                  [boolean]
  --javascript, --js  Generate a Javascript code file                  [boolean]
  --force, -f         Force overwriting exissting output file          [boolean]
  -h, --help          Show help                                        [boolean]
  -v, --version       Show version number                              [boolean]
```

## Example

See the example folder for an example schema with Typescript and Javascript generated binding files.
