import fs from 'fs';
import path from 'path';
import _ from 'lodash';

function parsing(pathToFile) {
  const fileContent = fs.readFileSync(pathToFile, 'utf-8');
  return JSON.parse(fileContent);
}
function diff(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const sortKeys = keys1.concat(keys2).sort();
  console.log(sortKeys);
}

export default function gendiff(file1, file2) {
  const path1 = path.resolve(process.cwd(), 'src', file1);
  const path2 = path.resolve(process.cwd(), 'src', file2);
  const jsonFile1 = parsing(path1);
  const jsonFile2 = parsing(path2);
  diff(jsonFile1, jsonFile2);
}
