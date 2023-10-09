import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import gendiff from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('flatTest', () => {
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const res = fs.readFileSync(getFixturePath('flatResult.txt'), 'utf-8');
  const fl1 = getFixturePath('file1.json');
  const fl2 = getFixturePath('file2.json');
  const result = gendiff(fl1, fl2);
  expect(res).toEqual(result);
});
