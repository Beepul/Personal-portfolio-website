import { useState, useEffect } from 'react';

function useSplitWords(sentence) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (typeof sentence === 'string') {
      const wordsArray = sentence.split("");
      setWords(wordsArray);
    } else {
      setWords([]);
    }
  }, [sentence]);

  return words;
}

export default useSplitWords