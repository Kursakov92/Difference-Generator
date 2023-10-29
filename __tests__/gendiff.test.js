import fs from 'fs';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import gendiff from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('Stylish gendiff', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(fs.readFileSync(getFixturePath('stylish-result.txt'), 'utf-8'));
  expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'stylish')).toEqual(fs.readFileSync(getFixturePath('stylish-result.txt'), 'utf-8'));
});

test('Plain gendiff', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(fs.readFileSync(getFixturePath('plain-result.txt'), 'utf-8'));
  expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain')).toEqual(fs.readFileSync(getFixturePath('plain-result.txt'), 'utf-8'));
});
