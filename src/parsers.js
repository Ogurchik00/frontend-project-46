import yaml from 'js-yaml';

const parse = (file, extension) => {
  const parsedFile = extension === '.json' ? JSON.parse(file) : yaml.load(file);
  return parsedFile;
};

export default parse;
