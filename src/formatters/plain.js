const formatValue = (value) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return `'${value}'`;
  }
  if (typeof value === 'object' && value !== null) {
    return `[complex value]`;
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
      }
      if (entry.type === 'nested') {
        return formPlain(entry.children, `${parent}${entry.key}.`);
      }
    });

  return result.join('\n');
};

export default formPlain;
