import React, { useState, useEffect } from 'react';
import Scene from './Scene';
import Mobile from './Mobile';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? <Mobile /> : <Scene />}
    </>
  );
};

export default App;