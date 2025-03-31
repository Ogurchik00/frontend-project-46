import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';
import formStylish from './formatters.js';

const buildOutput = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  const output = keys.map((key) => {
    if (!Object.hasOwn(obj2, key)) {
      return { key, type: 'removed', value: obj1[key] };
    }
    if (!Object.hasOwn(obj1, key)) {
      return { key, type: 'added', value: obj2[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, type: 'nested', children: buildOutput(obj1[key], obj2[key]) };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return { key, type: 'changed', oldValue: obj1[key], newValue: obj2[key] };
    }
    return { key, type: 'unchanged', value: obj1[key] };
  });
  return output;
};

const compareData = (path1, path2) => {
  const filepath1 = path.resolve(process.cwd(), path1);
  const filepath2 = path.resolve(process.cwd(), path2);
  const file1Extesion = path.extname(path1);
  const file2Extesion = path.extname(path2);
  const file1 = parse(filepath1, file1Extesion);
  const file2 = parse(filepath2, file2Extesion);
  const diff = buildOutput(file1, file2);
  return formStylish(diff, 1);
};

export default compareData;
