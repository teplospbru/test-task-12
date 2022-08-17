# Игра-лабиринт (тестовое задание).

Разработать игру «Лабиринт» на ReactJS + Redux.

![Иллюстрация к проекту](https://github.com/teplospbru/test-task-12/blob/main/test-task-12/)


## ТРЕБОВАНИЯ К ВЁРСТКЕ

Дизайн игры произвольный. Пример того, что должно получиться - https://drive.google.com/file/d/1NRMVNcn9XbOWPKNrbzDW0sE_jr36rVka/view?usp=sharing


## ОПИСАНИЕ ПРИЛОЖЕНИЯ

Есть поле размером 3 на 3 ячейки(продумайте масштабируемость). В начале игры в случайную ячейку помещаем маркер. Далее генерируются 10 «ходов» (возможные варианты «вверх», «влево», «вниз», «вправо»). Игрок должен в уме «пройти» по этим ходам по лабиринту и указать конечную точку маркера.
После ответа (клик на ячейку) идет проверка ответа и предоставляется возможность начать новую игру (например, по клику на кнопку «Далее»).
Если ответ введен неправильно - указать правильный ответ.


## ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ

Приложение оттестировано при помощи [React Testing Library](https://testing-library.com/)


### Запуск приложения 

Приложение запускается скриптом`npm run start` из консоли. Приложение откроется в браузере по адресу [http://localhost:3000](http://localhost:3000) 


### Запуск тестов 

Тесты запускаются скриптом`npm run test` из консоли.


### Развёрнутое приложение

Увидеть работу приложения можно [здесь](https://teplospbru.github.io/labirint/).