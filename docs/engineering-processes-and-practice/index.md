# Инженерные процессы и практики

## Философия

### Именования коммитов

Имена коммитов должны начинаться с номера задачи и краткого описания. Если задачи нет - создайте её. Пример:

```
  DWC #101 - layout для страниц и шапка сайта
```

## Методологии

### Git Flow

Отличная статья по теме [здесь](https://habr.com/ru/post/106912/).

Названия веток:

- master - ветка, в которой лежит функциональность для продакшена;
- stand - ветка, которая разворачивается на стенде;
- develop - ветка для разработки нового функционала;
- feature/[абривеатура-для-описания]-[номер]-[короткое-описание] - рабочие ветки, для разработки функциональной части в рамках задачи;
- hotfix/[абривеатура-для-описания]-[номер]-[короткое-описание] - ветки для исправлений неработающего кода, который попал в
  develop;

## Технологии

### CSS

#### Работа с SVG

Для преобразования SVG графики в React-компонент можно использовать инструмент [SVGR](https://react-svgr.com/). В проекте преобразование svg происходит автоматически, благодаря интеграции этого инструмента с Next js из коробки. Настроить этот процесс можно в next.config.js. Ручное преобразование выполнять не нужно, приведу пример, для общего понимания. Чтобы преобразовать SVG выполните команду `svgr --out-dir [название каталога куда положить компонент] -- [название каталога откуда взять иконку]/[название иконки].svg`. В результате вы получите React-компонент, который нужно "доработать напильником", обозначив типы и поменяв расширение файла на `tsx`.

```tsx
export const SvgCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='#000'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m8 12.5 3 3 5-6'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z'
      strokeWidth={2}
    />
  </svg>
);
```

### TypeScript

#### Приведение значений к одному типу.

Пример: в компоненте есть переменная shouldErrorComponentRender, типа boolean. В какой-то момент бизнес логика изменилась и вам потребовалось добавить в эту переменную дополнительное значение. Тип этой переменной стал таким:

```ts
const shouldErrorComponentRender = boolean | string | TDictionaryMenu | null;
```

В JavaScript пустая строка равна логическому значению false, при приведении к типу boolean. Но работать с таким неявным преобразованием значений в языке очень неудобно - это нагружает ментальную модель разработчика. Поэтому, если тип вашей переменной может иметь несколько значений, которые неявно преобразуются, обязательно исправьте это. В таких ситуациях используют специальные объекты для приведения типов - Number, String, Boolean, Symbol. Пример:

👎Плохо:

```ts
const shouldErrorComponentRender = false | 'абракадабра' | futureConfig;
```

👍Хорошо:

```javascript
const shouldErrorComponentRender =
  false | Boolean('абракадабра') | Boolean(futureConfig);
```

```javascript
const shouldErrorComponentRender = Boolean(
  false | 'абракадабра' | futureConfig
);
```
