import { useEffect } from 'react';

const links = [
  'https://www.google.com',
  'https://www.facebook.com',
  'https://www.twitter.com',
  'https://www.linkedin.com'
];

function App() {
  
  useEffect(() => {
    // Obtén el segundo actual
    const now = new Date();
    const seconds = now.getSeconds();
    const arraySize = links.length;
    
    const index = Math.floor((seconds / 3) % arraySize); // Calcula el índice en función del segundo actual

    window.location.replace(links[index]); // Redirige al enlace correspondiente
  }, []);

  return null;
}

export default App;
