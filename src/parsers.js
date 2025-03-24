import fs from 'fs';
import yaml from 'js-yaml';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const parse = (path, extension) => {
  const file = readFile(path);
  const parsedFile = extension === '.json' ? JSON.parse(file) : yaml.load(file);
  return parsedFile;
};

export default parse;
