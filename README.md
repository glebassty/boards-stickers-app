# Stickers App

Прототип модуля "Стикеры" для доски.
Есть CRUD и сокеты. Пока только API, фронтенда нет.

---

## что умеет

- создавать доски и стикеры
- получать список стикеров
- редактировать и удалять стикеры
- данные хранятся в postgres (через sequelize)

---

## как запустить

1. ставим зависимости

   ```bash
   npm install
   ```

2. настраиваем `.env` (пример)

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=stickers
   DB_USER=your_user
   DB_PASSWORD=your_password
   PORT=4000
   ```

3. поднимаем postgres (лучше 15, но должно и на других работать)

   ```bash
   createdb stickers
   ```

4. запускаем

   ```bash
   npm run dev
   ```

сервер будет на [http://localhost:4000](http://localhost:4000)

---

## api

стикеры:

- POST /boards/\:boardId/stickers
- GET /boards/\:boardId/stickers
- PATCH /boards/stickers/\:id
- DELETE /boards/stickers/\:id

---

## примеры

создать доску:

```bash
curl -X POST http://localhost:4000/boards \
  -H "Content-Type: application/json" \
  -d '{"title":"Первая доска"}'
```

создать стикер:

```bash
curl -X POST http://localhost:4000/boards/1/stickers \
  -H "Content-Type: application/json" \
  -d '{"text":"Первый стикер","layer":1}'
```

получить список:

```bash
curl http://localhost:4000/boards/1/stickers
```

обновить:

```bash
curl -X PATCH http://localhost:4000/boards/stickers/1 \
  -H "Content-Type: application/json" \
  -d '{"text":"обновлённый текст"}'
```

удалить:

```bash
curl -X DELETE http://localhost:4000/boards/stickers/1
```

---

## скрипты

- `npm run create:board` — создаёт тестовую доску
- `npm run create:sticker` — создаёт тестовый стикер
