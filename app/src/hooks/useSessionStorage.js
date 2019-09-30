import { useState, useEffect } from 'react';

export const useSessionStorage = (key) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const ss_data = sessionStorage.getItem(key);
    if (ss_data) setData(ss_data);
  }, []);

  const updateValue = (value) => {
    if (!value) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, value);
    }
    setData(value);
  }
  return [
    data,
    updateValue
  ];
}