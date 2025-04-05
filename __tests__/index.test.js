import { test, expect } from '@jest/globals';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('nested comparison', () => {
  const json = getFixturePath('file1.json');
  const yml = getFixturePath('file2.yml');
  const resultStylish = readFile('resultStylish.txt');
  const resultPlain = readFile('resultPlain.txt');
  const resultJSON = readFile('resultJSON.txt');
  expect(genDiff(json, yml)).toEqual(resultStylish);
  expect(genDiff(json, yml, 'plain')).toEqual(resultPlain);
  expect(genDiff(json, yml, 'json')).toEqual(resultJSON);
});
