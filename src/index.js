import path from 'path';
import parsing from './parser.js';
import diff from './diff.js';
import doFormat from './formatter/index.js';

export default function genDiff(file1, file2, formatter = 'stylish') {
  const path1 = path.resolve(process.cwd(), '__fixtures__', file1);
  const path2 = path.resolve(process.cwd(), '__fixtures__', file2);
  const parseFile1 = parsing(path1);
  const parseFile2 = parsing(path2);

  const tree = diff(parseFile1, parseFile2);
  return doFormat(formatter, tree);
}
