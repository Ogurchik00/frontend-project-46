/* consistent-return: "off" */

import formStylish from './stylish.js';
import formPlain from './plain.js';
import formJson from './json.js';

const formatData = (data, format) => {
  if (format === 'stylish') {
    return formStylish(data);
  }
  if (format === 'plain') {
    return formPlain(data);
  }
  if (format === 'json') {
    return formJson(data);
  }
};

export default formatData;
