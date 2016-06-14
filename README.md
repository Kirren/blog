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
```bash
git clone https://github.com/pavlovsch/blog.git && cd blog
```
Ввести команду
```bash
npm install
```
Зайти в базу данных MySQL и ввести следующее:
```sql
CREATE DATABASE blog;
```
```sql
USE blog;
```
```sql
CREATE TABLE posts (id TINYTEXT unique, title TINYTEXT, text TEXT, action TINYTEXT, date TINYTEXT, altdate TINYTEXT, video TINYTEXT, quote TINYTEXT, picture TINYTEXT, hashtags TINYTEXT, gallery JSON);
```
```sql
create table users (id INT primary key auto_increment, username VARCHAR(100) unique, password VARCHAR(100));
```
```sql
INSERT INTO users (username, password) VALUES ('user_name', 'user_password');
```
4. Открыть ./server/config.js и настроить его

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

## Что еще предстоит сделать:

#### Общее:
* About page
* Contact page

#### Front-end:
* Адаптивность
* Подсказки для полей ввода
