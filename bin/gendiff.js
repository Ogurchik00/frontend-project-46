#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import parse from '../src/parser.js';
import _ from 'lodash';

const program = new Command();

const genDiff = (path10, path20) => {
  const path1 = path.resolve(process.cwd(), path10);
  const path2 = path.resolve(process.cwd(), path20);
  const file1 = parse(path1);
  const file2 = parse(path2);
  const keys = _.union(Object.keys(file1), Object.keys(file2)).sort();
  const diff = `{\n${keys.reduce((acc, key) => {
    if (Object.hasOwn(file1, key) && !Object.hasOwn(file2, key)) {
      acc = `${acc}  - ${key}: ${file1[key]}\n`;
      return acc;
    } else if (!Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
      acc = `${acc}  + ${key}: ${file2[key]}\n`;
      return acc;
    } else if (file1[key] === file2[key]) {
      acc = `${acc}    ${key}: ${file1[key]}\n`;
      return acc;
    } else {
      acc = `${acc}  - ${key}: ${file1[key]}\n  + ${key}: ${file1[key]}\n`;
      return acc;
    }
  }, '')}}`;
  console.log(diff);
};

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version ', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => genDiff(filepath1, filepath2));

program.parse();

export default genDiff;
