import { atom } from 'recoil';

const localStorageDarkMode = localStorage.getItem('darkMode') === 'true';

export const darkModeState = atom<boolean>({
  key: 'darkModeState',
  default: localStorageDarkMode,
  effects: [
    ({ onSet }) => {
      onSet((newVal) => {
        localStorage.setItem('darkMode', String(newVal));
      });
    },
  ],
});
