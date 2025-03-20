#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import parse from '../src/parser.js';

const program = new Command();

const genDiff = () => {
  program
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version ', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
      const path1 = path.resolve(process.cwd(), filepath1);
      const path2 = path.resolve(process.cwd(), filepath2);
      parse(path1, path2);
    });

  program.parse();
};

genDiff();

export default genDiff;
