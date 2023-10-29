import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import gendiff from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('testJSON', () => {
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const res = fs.readFileSync(getFixturePath('recursionResult.txt'), 'utf-8');
  const fl1 = getFixturePath('recursionFile1.json');
  const fl2 = getFixturePath('recursionFile2.json');
  const result = gendiff(fl1, fl2);
  expect(res).toEqual(result);
});

test('testYAML', () => {
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const res = fs.readFileSync(getFixturePath('recursionResult.txt'), 'utf-8');
  const fl1 = getFixturePath('recursionFile1.yaml');
  const fl2 = getFixturePath('recursionFile2.yaml');
  const result = gendiff(fl1, fl2);
  expect(res).toEqual(result);
});
