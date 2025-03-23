import compareData from '../src/compareData.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('flat comparison', () => {
  const firstFilePath = getFixturePath('file1.json');
  const secondFilePath = getFixturePath('file2.json');
  const result = readFile('flatResult.txt');
  expect(compareData(firstFilePath, secondFilePath)).toEqual(result);
});
