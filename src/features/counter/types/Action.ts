type Action =
  | { type: 'counter/plus', payload: number }
  | { type: 'counter/minus', payload: number };

export default Action;
// Действие Action - это объект в котором два поля:
// 1. type - тип дейстивия - это имя нашего действия - это строка
// удобно называть ИМЯ_ФИЧИ/НАЗВАНИЕ_ОПЕРАЦИИ
// 2. payload - полезная нагрузка -
// информация необходимая для выполнения операции
// - на сколько мы увеличить или уменьшить наш каунтер-централизованное состояние