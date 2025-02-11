import React, { useState, useEffect } from 'react';
import Background from './DuckScene';
import TypingAnimation from './TypingAnimation';
import AboutMe from './AboutMe';


function App() {

  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showTypingAnimation, setShowTypingAnimation] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
      if (window.scrollY != offset && window.scrollY > 0) {
        console.log('not equal');
        setShowAboutMe(true);
        setShowTypingAnimation(false);
      } else {
        console.log('equal');
        setShowAboutMe(false);
        setShowTypingAnimation(true);
      }
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset);

  return (
    <>
      {/* Background Component */}
      <Background />

      {/* Content Container */}
      <div className="content-container">
        {showTypingAnimation && <TypingAnimation />}
        {showAboutMe && <AboutMe />}
      </div>
    </>
  );
}

export default App;