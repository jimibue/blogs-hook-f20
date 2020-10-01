import { useState, useEffect } from "react";
const useRandom = (range) => {
  const [number, setNumber] = useState(null);

  // setRandom number onMount whereever I use this hook
  useEffect(() => {
    generateNumber();
  }, []);

  const generateNumber = () => {
    const isArray = Array.isArray(range);
    let min = isArray ? range[0] : 0;
    let max = isArray ? range[1] : range;
    setNumber(Math.round(Math.random() * (max - min)) + min);
  };

  return { number, reset: generateNumber };
};

export default useRandom;
