import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
    } else {
      timeout = window.setTimeout(
        () => setText(word.slice(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? speed / 2 : speed,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [deleting, pause, speed, text, wordIndex, words]);

  return text;
}
