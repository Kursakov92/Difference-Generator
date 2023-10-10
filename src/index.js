import path from 'path';
import _ from 'lodash';
import parsing from './parser.js';

function diff(obj1, obj2) {
  let result = '';
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const sortKeys = keys1.concat(keys2).sort();
  const uniqKeys = _.uniq(sortKeys);

  uniqKeys.forEach((key) => {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      result += obj1[key] === obj2[key] ? `\n    ${key}: ${obj1[key]}` : `\n  -  ${key}: ${obj1[key]}\n  +  ${key}: ${obj2[key]}`;
    }
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      result += `\n  -  ${key}: ${obj1[key]}`;
    }
    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      result += `\n  +  ${key}: ${obj2[key]}`;
    }
  });
  return `{${result}\n}`;
}

export default function gendiff(file1, file2) {
  const path1 = path.resolve(process.cwd(), '__fixtures__', file1);
  const path2 = path.resolve(process.cwd(), '__fixtures__', file2);
  const parseFile1 = parsing(path1);
  const parseFile2 = parsing(path2);
  return diff(parseFile1, parseFile2);
}
