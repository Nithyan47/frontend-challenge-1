import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from './state/themeState';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

const App = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = saved === 'true';
    setDarkMode(prefersDark);
  }, [setDarkMode]);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition text-gray-900 dark:text-gray-100">
      <div className="max-w-xl mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Todo List</h1>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <div className="space-y-4">
          <TodoInput />
          <TodoList />
          <TodoFilters />
        </div>
      </div>
    </div>
  );
};

export default App;
