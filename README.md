# Blog

## Возможности:
* Использование Markdown разметки
* Создавать пост со следующей тематикой:
  * Обычный пост
  * Обычный пост с картинкой в шапке
  * Пост-галарея
  * Пост-видео
  * Пост-цитата
* Удалять пост
* Редактировать пост
* Поиск/Фильтр статей в админ-панеле
* Ограничивать длину вступительного абзаца путём вставки следующего набора символов: `[INTRO: END]`
* Аутентификация при входе в админ-панель

## Требования:
* nodejs >= 6
* mySQL >= 5.7

## Готовим блог
### Инициализация
Скачать репозиторий и зайти в папку проекта
```
git clone https://github.com/pavlovsch/blog.git && cd blog
```
Ввести команду
```
npm install
```
Открыть ./server/config.js и настроить его

### Запуск
* В режиме development:
```bash
npm start
```
* В режиме production:
```bash
npm run server
```

## Основные маршруты:
* / - корень блога
* /admin - админ-панель
* /login - логин-панель
* /search - поиск
* /archive - архив
* /about - "о нас"
* /contact - обратная связь
