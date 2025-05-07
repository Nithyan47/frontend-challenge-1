import { useRecoilState, useSetRecoilState } from 'recoil';
import { filterState } from '../state/filterState';
import { todoListState } from '../state/todoState';

const filters = ['All', 'Active', 'Completed'] as const;

const TodoFilters = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const setTodos = useSetRecoilState(todoListState);

  const clearCompleted = () => {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="flex justify-center gap-4 mt-4 flex-wrap">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition
            ${filter === f
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
        >
          {f}
        </button>
      ))}
      <button
        onClick={clearCompleted}
        className="px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFilters;
