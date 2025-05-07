import { atom } from 'recoil';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const localStorageKey = 'todoList';

const getInitialTodos = (): Todo[] => {
  const saved = localStorage.getItem(localStorageKey);
  return saved ? JSON.parse(saved) : [];
};

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: getInitialTodos(),
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem(localStorageKey, JSON.stringify(newValue));
      });
    },
  ],
});
