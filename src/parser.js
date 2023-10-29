import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function parsing(pathToFile) {
  const format = path.extname(pathToFile).toLowerCase();
  if (format === '.json') {
    const fileContent = fs.readFileSync(pathToFile, 'utf-8');
    return JSON.parse(fileContent);
  }
  if (format === '.yml' || format === '.yaml') {
    const fileContent = fs.readFileSync(pathToFile, 'utf-8');
    return yaml.load(fileContent);
  }
  return `Unknown format: ${format}`;
}
