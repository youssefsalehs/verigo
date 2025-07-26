import { useEffect, useState } from "react";

function useLocalStorage(init, key) {
  const [value, setvalue] = useState(function () {
    const storedval = localStorage.getItem(key);
    return storedval ? JSON.parse(storedval) : init;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setvalue];
}
export default useLocalStorage;
