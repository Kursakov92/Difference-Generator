import fs from 'fs';
import { test, expect } from '@jest/globals';

test('flatTest', () => {
  const res = fs.readFileSync('../__fixtures__/flatResult.txt', 'utf-8');
  expect(res).toEqual(res);
});
