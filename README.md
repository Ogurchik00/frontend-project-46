# Вычислитель отличий

### Hexlet tests and linter status:

[![Actions Status](https://github.com/v-semyashkina/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/v-semyashkina/frontend-project-46/actions)

### Gendiff tests and linter status:

[![gendiff](https://github.com/v-semyashkina/frontend-project-46/actions/workflows/gendiff.yml/badge.svg)](https://github.com/v-semyashkina/frontend-project-46/actions/workflows/gendiff.yml)

## Минимальные требования:

- Node.js последней версии
- npm
- make
- Commander.js
- Lodash
-

## Установка:

make install

## Запуск утилиты:

- gendiff -h для вывода справки
- gendiff filepath1 filepath2 для сравнения двух файлов с форматированием результата по умолчанию (stylish)
- gendiff -f plain filepath1 filepath2 либо gendiff -f plain filepath1 filepath2 для сравнения двух файлов с форматированием результата в плоском текстовом формате (plain)
- gendiff -f json filepath1 filepath2 либо gendiff -f json filepath1 filepath2 для сравнения двух файлов с форматированием результата в формате JSON

## Демонстрация сравнения плоских файлов:

[![asciicast](https://asciinema.org/a/yDOx3T0NHvnixY9oPB6HisNf5.svg)](https://asciinema.org/a/yDOx3T0NHvnixY9oPB6HisNf5)
