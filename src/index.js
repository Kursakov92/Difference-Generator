import fs from 'fs';
import path from 'path';
import _ from 'lodash';

function parsing(pathToFile) {
  const fileContent = fs.readFileSync(pathToFile, 'utf-8');
  return JSON.parse(fileContent);
}

function diff(obj1, obj2) {
  let result = '';
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const sortKeys = keys1.concat(keys2).sort();
  const uniqKeys = _.uniq(sortKeys);

  uniqKeys.forEach((key) => {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      result += obj1[key] === obj2[key] ? `\n    ${key}: ${obj1[key]}` : `\n -  ${key}: ${obj1[key]}\n +  ${key}: ${obj2[key]}`;
    }
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      result += `\n -  ${key}: ${obj1[key]}`;
    }
    if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      result += `\n +  ${key}: ${obj2[key]}`;
    }
  });
  return `{${result}\n}`;
}

export default function gendiff(file1, file2) {
  const path1 = path.resolve(process.cwd(), '__fixtures__', file1);
  const path2 = path.resolve(process.cwd(), '__fixtures__', file2);
  const jsonFile1 = parsing(path1);
  const jsonFile2 = parsing(path2);
  console.log(diff(jsonFile1, jsonFile2));
}
