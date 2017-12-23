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
  --dotenv         Path to .env file                                    [string]
  -p, --project    Project name                                         [string]
  --schema         Schema file to process                               [string]
  --output, -o     Filename of output code file              [string] [required]
  --generator, -g  Generator used to generate binding files             [string]
  --force, -f      Force overwriting exissting output file             [boolean]
  -h, --help       Show help                                           [boolean]
  -v, --version    Show version number                                 [boolean]
```

## Available generators

Currently, the following generators are available:
- `graphcool-ts`: Generate Typescript binding file based on `graphcool-binding`
- `graphcool-js`: Generate Javascript binding file based on `graphcool-binding`
- `binding-ts`: Generate Typescript binding file based on `graphql-binding`
- `binding-js`: Generate Javascript binding file based on `graphql-binding`

You can also pass your own generator file to `--generator`.
<hr>
<p align="center">
  <img src="https://img.shields.io/badge/built-with_love-blue.svg?style=for-the-badge"/><a href="https://github.com/kbrandwijk" target="-_blank"><img src="https://img.shields.io/badge/by-kim_brandwijk-blue.svg?style=for-the-badge"/></a>
</p>
