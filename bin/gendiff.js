#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/index';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format, <type>  output format')
  .arguments('<filepath1> <filepath2>')
  .action(gendiff)
  .parse();
