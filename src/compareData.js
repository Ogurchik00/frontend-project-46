import path from 'path';
import parse from '../src/parser.js';
import _ from 'lodash';

const compareData = (path1, path2) => {
  const filepath1 = path.resolve(process.cwd(), path1);
  const filepath2 = path.resolve(process.cwd(), path2);
  const file1 = parse(filepath1);
  const file2 = parse(filepath2);
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
      acc = `${acc}  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}\n`;
      return acc;
    }
  }, '')}}`;
  return diff;
};

export default compareData;
