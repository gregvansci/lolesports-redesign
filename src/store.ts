import { writable } from "svelte/store";

let darkModeValue = false;

if (typeof localStorage !== 'undefined') {
  darkModeValue = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

export const darkMode = writable(darkModeValue);
