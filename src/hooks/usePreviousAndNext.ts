import { useState } from 'react';
export const usePreviousAndNext = () => {
  const [ previous, setPrevious ] = useState<string | null>(null);
  const [ next, setNext ] = useState<string | null>("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
  



  return {};
};
