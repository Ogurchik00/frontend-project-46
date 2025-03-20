import fs from 'fs';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const parse = (path1, path2) => {
  const file1 = readFile(path1);
  const file2 = readFile(path2);
  const parsedFile1 = JSON.parse(file1);
  const parsedFile2 = JSON.parse(file2);
  console.log(parsedFile1);
};

export default parse;
