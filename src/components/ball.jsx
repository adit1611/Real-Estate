import React, { useState, useEffect } from 'react';

const BallFollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Update position with the cursor's coordinates
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen z-50">
      <div
        className="absolute bg-blue-500 h-20 w-20 rounded-full"
        style={{ 
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.1s'
        }}
      ></div>
    </div>
  );
};

export default BallFollowCursor;
