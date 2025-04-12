#!/usr/bin/env node
import { Command } from 'commander';
import app from '../src/index.js'

const program = new Command();

const gendiff = program
    .name('gendiff')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .description(`Compares two configuration files and shows a difference.`)
    .action((a, b, options) => {
        console.log(app(a, b, options));
    })
    .option('-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format');

gendiff.parse();