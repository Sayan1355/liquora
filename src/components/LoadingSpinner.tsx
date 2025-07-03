
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingSpinner: React.FC = () => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spinnerRef.current) {
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center py-20">
      <div
        ref={spinnerRef}
        className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full"
      />
    </div>
  );
};

export default LoadingSpinner;
