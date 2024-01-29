// Your React component

import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-rose-500 border-solid h-12 w-12"></div>
    </div>
  );
};

export default LoadingSpinner;
