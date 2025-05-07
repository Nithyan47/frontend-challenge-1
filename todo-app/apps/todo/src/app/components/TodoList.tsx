import { useRecoilValue } from 'recoil';
import { todoListState } from '../state/todoState';
import { filterState } from '../state/filterState';
import { TodoItem } from './TodoItem';

const TodoList = () => {
  const todos = useRecoilValue(todoListState);
  const filter = useRecoilValue(filterState);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No todos found.</p>;
  }

  return (
    <div className="mt-4 space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
