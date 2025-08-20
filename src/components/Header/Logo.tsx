import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-gray-800 via-gray-500 to-gray-800 rounded-md">
        <svg viewBox="0 0 32 32" width={28} height={28}>
          <circle cx="16" cy="16" r="14" fill="#222" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fill="#fff"
            fontSize="14px"
            fontFamily="sans-serif"
            dy=".3em"
          >
            BD
          </text>
        </svg>
      </div>
      <span className="text-2xl font-medium text-white">BD</span>
    </div>
  );
};

export default Logo;
