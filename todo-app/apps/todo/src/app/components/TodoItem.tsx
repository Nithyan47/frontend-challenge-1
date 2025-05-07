import { Todo } from '../state/todoState';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../state/todoState';

export interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const setTodoList = useSetRecoilState(todoListState);

  const toggleComplete = () => {
    setTodoList((oldTodos) =>
      oldTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    setTodoList((oldTodos) => oldTodos.filter((t) => t.id !== todo.id));
  };

  return (
    <div
      className={`flex justify-between items-center px-4 py-3 rounded-lg shadow-sm 
        transition-transform duration-300 transform hover:scale-[1.02]
        bg-white dark:bg-gray-800 text-black dark:text-white
        ${todo.completed ? 'line-through opacity-60' : ''}`}
    >
      <span
        onClick={toggleComplete}
        className="cursor-pointer flex-1 text-base sm:text-lg"
        aria-label="Toggle complete"
      >
        {todo.text}
      </span>
      <button
        onClick={deleteTodo}
        className="ml-4 text-red-500 hover:text-red-700 text-xl"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  );
};
