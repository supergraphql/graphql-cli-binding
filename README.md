# graphql-cli-bundle
[![npm](https://img.shields.io/npm/v/graphql-cli-bundle.svg?style=for-the-badge)]()
[![CircleCI](https://img.shields.io/circleci/project/github/supergraphql/graphql-cli-bundle.svg?style=for-the-badge)]()
[![Greenkeeper badge](https://badges.greenkeeper.io/supergraphql/graphql-cli-bundle.svg)](https://greenkeeper.io/)  
Plugin for [`graphql-cli`](https://github.com/graphql-cli/graphql-cli). Processes import statements in a GraphQL schema using [`graphql-import`](https://github.com/graphcool/graphql-import) and outputs a single schema file.

## Installation

Install `graphql-cli-bundle` either globally (recommended) or locally using your favorite package manager:
```shell
$ yarn add graphql-cli-bundle [--global]
$ npm install graphql-cli-bundle [--global]
```

## Usage
```
graphql bundle [schema]

Process import statements in a schema and output a single schema file

Options:
  --dotenv       Path to .env file                                      [string]
  -p, --project  Project name                                           [string]
  --schema       Schema file to process                                 [string]
  --output, -o   Filename of output schema                   [string] [required]
  --force, -f    Force overwriting exissting output file               [boolean]
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```
