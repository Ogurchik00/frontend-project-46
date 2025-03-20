import fs from 'fs';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const parse = (path) => {
  const file = readFile(path);
  const parsedFile = JSON.parse(file);
  return parsedFile;
};

export default parse;
