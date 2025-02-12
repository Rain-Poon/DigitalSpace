import React, { useState, useEffect, useRef } from 'react';
import Background from './DuckScene';
import TypingAnimation from './TypingAnimation';
import AboutMe from './AboutMe';
import ProjectGallery from './Projects';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const orderOfPages = [
    <TypingAnimation key="typing" />,
    <AboutMe key="about" />,
    <ProjectGallery key="projects" />
  ];

  // For mobile touch detection
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);

  // A throttle flag to avoid rapid-fire page transitions
  const throttleTimeout = useRef(null);

  // Helper: Move page if not throttled
  const changePage = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction > 0 && prevPage < orderOfPages.length - 1) {
        return prevPage + 1;
      } else if (direction < 0 && prevPage > 0) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  // Throttle function so we don't trigger page change too frequently
  const triggerPageChange = (direction) => {
    if (throttleTimeout.current) return;
    changePage(direction);
    throttleTimeout.current = setTimeout(() => {
      throttleTimeout.current = null;
    }, 700); // 700ms throttle delay resets between page transitions
  };

  useEffect(() => {
    // Desktop wheel event
    const handleWheel = (event) => {
      // Prevent default page scrolling
      event.preventDefault();
      const delta = event.deltaY;
      if (delta > 0) {
        triggerPageChange(1);
      } else if (delta < 0) {
        triggerPageChange(-1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [orderOfPages.length]);

  // Mobile touch events
  useEffect(() => {
    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      touchEndY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (touchStartY.current != null && touchEndY.current != null) {
        const diff = touchStartY.current - touchEndY.current;
        // You can adjust the threshold percentage on mobile if desired.
        const threshold = window.innerHeight * 0.1; // 10% of viewport height
        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            // Swiped up (move to next page)
            triggerPageChange(1);
          } else {
            // Swiped down (move to previous page)
            triggerPageChange(-1);
          }
        }
      }
      // Reset touch pointers
      touchStartY.current = null;
      touchEndY.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [orderOfPages.length]);

  return (
    <>
      {/* Background Component */}
      <Background />

      {/* Content Container (each section can be 100vh) */}
      <div className="content-container" style={{ height: '100vh', overflow: 'hidden', }}>
        {orderOfPages[currentPage]}
      </div>
    </>
  );
}

export default App;