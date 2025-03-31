#!/usr/bin/env node

import { Command } from 'commander';
import compareData from '../src/compareData.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version ', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const difference = compareData(filepath1, filepath2, program.opts().format);
    console.log(difference);
  });

program.parse();
