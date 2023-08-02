import { combineReducers, createStore } from 'redux';
import counterReducer from './features/counter/counterReducer';
import sandwichReducer from './features/sandwich/sandwichReducer';

const store = createStore(combineReducers(
  {
    counter: counterReducer,
    sandwich: sandwichReducer,
    // здесь имена других фич и ссылка на редюсеры
  }
));

export default store;

export type RootState = ReturnType<typeof store.getState>;