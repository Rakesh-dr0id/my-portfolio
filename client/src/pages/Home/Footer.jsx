import React from 'react';

const Footer = () => {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-gray-700"></div>

      <div className="flex items-center justify-center flex-col mt-10 opacity-70 gap-1">
        <h1 className="text-white">Designed and Developed by</h1>
        <h1 className="text-white">Rakesh prabhu &#169;</h1>
        <h1 className="text-white">TwentyTwentyThree</h1>
      </div>
    </div>
  );
};

export default Footer;
