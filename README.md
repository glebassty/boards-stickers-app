# Stickers App

## Описание

Прототип модуля "Стикеры" для виртуальной доски.  
Реализованы:

CRUD REST API для стикеров
WebSocket события через socket.io
PostgreSQL + Sequelize

## Стек

Node.js + TypeScript
Express
PostgreSQL + Sequelize
socket.io

## Установка и запуск

1. Установите зависимости:

   npm install

2. Заполните .env:

DB*HOST=localhost
DB_PORT=5432
DB_NAME=stickers
DB_USER=ваш*пользователь
DB*PASSWORD=ваш*пароль
PORT=4000

3. Запустите PostgreSQL (желательно 15) и создай базу данных `stickers`.

createdb stickers

4. Запустите проект в dev-режиме:

   npm run dev

5. Сервер доступен на [http://localhost:4000](http://localhost:4000)

## API

- `POST /boards/:boardId/stickers` — создать стикер
- `GET /boards/:boardId/stickers` — получить список стикеров
- `PATCH /boards/stickers/:id` — обновить стикер
- `DELETE /boards/stickers/:id` — удалить стикер

## Примеры команд

Создать доску:

curl -X POST http://localhost:4000/boards \
-H "Content-Type: application/json" \
-d '{"title":"Первая доска"}'

Создать стикер:

curl -X POST http://localhost:4000/boards/1/stickers \
-H "Content-Type: application/json" \
-d '{"text":"Первый стикер","layer":1}'

Получить стикеры на доске:

curl http://localhost:4000/boards/1/stickers

Редактировать стикер

curl -X PATCH http://localhost:4000/boards/stickers/1 \
-H "Content-Type: application/json" \
-d '{"text":"Обновлённый стикер"}'

Удалить

curl -X DELETE http://localhost:4000/boards/stickers/1

Используйте скрипты для редоктирования
Добавлено пока 2 скрипта

npm run create:board - создание доски
npm run create:sticker - создание стикера
