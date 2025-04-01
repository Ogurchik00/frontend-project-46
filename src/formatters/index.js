import formStylish from './stylish.js';
import formPlain from './plain.js';

const formatData = (data, format) => {
  if (format === 'stylish') {
    return formStylish(data);
  }
  if (format === 'plain') {
    return formPlain(data);
  }
  return JSON.stringify(data);
};

export default formatData;
