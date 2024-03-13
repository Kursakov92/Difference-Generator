### Hexlet tests and linter status:
[![Actions Status](https://github.com/Kursakov92/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Kursakov92/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/7a32facf3898fcdeccf5/maintainability)](https://codeclimate.com/github/Kursakov92/frontend-project-46/maintainability)

![my badge](https://github.com/Kursakov92/frontend-project-46/actions/workflows/gendiff-check.yml/badge.svg)

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. 

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json


## Установка

```sh
$ git clone git@github.com:kpako3rbp/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
$ nmp link
```

## Быстрый старт

### Вывод справки

Используйте флаг -h или --help для вызова справки

```sh
$ gendiff --help
```
```sh
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```
### Использование 
Используйте флаг -f или --format для выбора необходимого форматтера. По умолчанию используется "stylish". Далее укажите пути к сравниваемым файлам. Программа умеет работать как с относительными, так и абсолютными путями.

## Формат вывода 'stylish'

```sh
$ gendiff file1.json file2.json
$ gendiff file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/O8ztcXJhrjtejBcG0BPYfuWKz.svg)](https://asciinema.org/a/O8ztcXJhrjtejBcG0BPYfuWKz) 

## Формат вывода 'plain'

```sh
$ gendiff -f plain file1.json file2.json
$ gendiff -f plain file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/1XV0xd0bHv3gdwQdIUpf6I3SF.svg)](https://asciinema.org/a/1XV0xd0bHv3gdwQdIUpf6I3SF)

## Формат вывода 'json'

```sh
$ gendiff -f json file1.json file2.json
$ gendiff -f json file1.yml file2.yaml
```
[![asciicast](https://asciinema.org/a/w4HdlXDPZ54RCf18FO3tUzzDN.svg)](https://asciinema.org/a/w4HdlXDPZ54RCf18FO3tUzzDN)