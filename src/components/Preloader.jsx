import React, { useState, useEffect } from 'react';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => onFinish(), 1000);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b1326] transition-all duration-700 ${
        fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-tertiary/10 rounded-full blur-[120px]"></div>

      {/* Logo */}
      <div className="relative z-10 mb-12">
        <h1
          className="text-6xl font-black tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span className="text-gradient">BEDEL</span>
          <span className="text-primary">.</span>
        </h1>
        <p
          className="text-center text-sm uppercase tracking-[0.4em] text-slate-500 mt-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Portfolio
        </p>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-48">
        <div className="h-[2px] w-full bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <p className="text-center text-xs text-slate-600 mt-3 font-mono tracking-widest">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;
