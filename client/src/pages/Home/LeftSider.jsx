import React from 'react';

const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-5 sm:flex-row sm:pb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/rakesh-prabhu"
          >
            <i className="ri-linkedin-box-fill text-gray-400 text-xl"></i>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Rakesh-dr0id/"
          >
            <i className="ri-github-fill text-gray-400 text-xl"></i>
          </a>

          <a href="mailto:rakeshprabhuofficial@gmail.com">
            <i className="ri-mail-line text-gray-400 text-xl"></i>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/rakezh22"
          >
            <i className="ri-telegram-line text-gray-400 text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden "></div>
      </div>
    </div>
  );
};

export default LeftSider;
