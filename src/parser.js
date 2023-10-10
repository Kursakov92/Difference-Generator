import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function parsing(pathToFile) {
  const format = path.extname(pathToFile).toLowerCase();
  let result = '';
  if (format === '.json') {
    const fileContent = fs.readFileSync(pathToFile, 'utf-8');
    result = JSON.parse(fileContent);
  }
  if (format === '.yml' || format === '.yaml') {
    const fileContent = yaml.load(fs.readFileSync(pathToFile, 'utf-8'));
    result = yaml.safeLoad(fileContent);
  }
  return result;
}
