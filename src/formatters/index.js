import formStylish from './stylish.js';
import formPlain from './plain.js';

const formatData = (data, format) => {
  if (format === 'stylish') {
    return formStylish(data, 1);
  }
  if (format === 'plain') {
    return formPlain(data);
  }
};

export default formatData;
