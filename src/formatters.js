import _ from 'lodash';

const signs = {
  removed: '- ',
  added: '+ ',
  unchanged: '  ',
  nested: '  ',
};

const getIndent = (depth, leftShift = 2, spacesCount = 4) => depth * spacesCount - leftShift;

const stringifyValue = (value, depth) => {
  function process(iterValue, iterDepth) {
    if (_.isPlainObject(iterValue)) {
      return `${iterValue}`;
    }

    const indentSize = getIndent(iterDepth, 0);
    const currentIndent = ' '.repeat(indentSize);
    const bracketIndent = ' '.repeat(indentSize - 4);

    const objEntries = Object.entries(iterValue).map(([key, val]) => {
      const processedValue = process(val, iterDepth + 1);
      return `${currentIndent}${key}: ${processedValue}`;
    });

    return `{\n${objEntries.join('\n')}\n${bracketIndent}}`;
  }
  return process(value, depth);
};

const formStylish = (value, depth) => {
  const indentSize = getIndent(depth);
  const currentIndent = ' '.repeat(indentSize);
  const bracketIndent = ' '.repeat(indentSize - 2);

  const result = value.map((entry) => {
    {
      if (entry.type === 'changed') {
        return `${currentIndent}${signs.removed}${entry.key}: ${stringifyValue(
          entry.oldValue,
          depth + 1,
        )}\n${currentIndent}${signs.added}${entry.key}: ${stringifyValue(
          entry.newValue,
          depth + 1,
        )}`;
      }
      if (entry.type === 'nested') {
        return `${currentIndent}${signs[entry.type]}${entry.key}: ${formStylish(
          entry.children,
          depth + 1,
        )}`;
      }
      return `${currentIndent}${signs[entry.type]}${entry.key}: ${stringifyValue(
        entry.value,
        depth + 1,
      )}`;
    }
  });

  return ['{', ...result, `${bracketIndent}}`].join('\n');
};

export default formStylish;
