/* consistent-return: "off", array-callback-return: "off" */

import _ from 'lodash';

const formatValue = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return value;
};

const formPlain = (value, parent = '') => {
  const result = value
    .filter((entry) => entry.type !== 'unchanged')
    .map((entry) => {
      if (entry.type === 'removed') {
        return `Property '${parent}${entry.key}' was removed`;
      }
      if (entry.type === 'added') {
        return `Property '${parent}${entry.key}' was added with value: ${formatValue(entry.value)}`;
      }
      if (entry.type === 'changed') {
        return `Property '${parent}${entry.key}' was updated. From ${formatValue(
          entry.oldValue,
        )} to ${formatValue(entry.newValue)}`;
      } else if (entry.type === 'nested') {
        return formPlain(entry.children, `${parent}${entry.key}.`);
      }
    });

  return result.join('\n');
};

export default formPlain;
