import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../state/todoState';
import { Plus } from 'lucide-react';

const TodoInput = () => {
  const [text, setText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (text.trim() === '') return;
    setTodoList((oldTodos) => [
      ...oldTodos,
      {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      },
    ]);
    setText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-black dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Add a new task..."
      />
      <button
        onClick={addTodo}
        className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition 
                   flex items-center justify-center"
        aria-label="Add todo"
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TodoInput;
