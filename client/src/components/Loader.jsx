import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]">
      <div className="flex gap-5 text-4xl font-semibold sm:text-3xl">
        <h1 className="text-tertiary r">R</h1>
        <h1 className="text-white o">O</h1>
        <h1 className="text-secondary c">C</h1>
        <h1 className="text-white k">K</h1>
        <h1 className="text-tertiary y">Y</h1>
      </div>
    </div>
  );
};

export default Loader;
