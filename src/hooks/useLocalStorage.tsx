import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  const setValue = (value: T | ((val: T) => T)) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}
