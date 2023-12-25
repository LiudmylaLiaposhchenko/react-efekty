import { useEffect } from 'react';
/*
Zadání: Upravte efekt v této komponentě tak, aby se při zobrazení komponenty v konzoli objevil
  text „Jsem tady“.
*/

export const Ukol1 = () => {
  useEffect(() => {
    console.log('Jsem tady');
  }, []);

  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
