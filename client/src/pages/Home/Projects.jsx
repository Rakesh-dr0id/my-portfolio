import React, { useState } from 'react';
import SectionTitle from './../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { portfolioData } = useSelector((state) => state.root);

  const { projects } = portfolioData;

  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, idx) => (
            <div
              onClick={() => {
                setSelectedItemIndex(idx);
              }}
              className="cursor-pointer"
              key={idx}
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === idx
                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3'
                    : 'text-white'
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            className="h-60 w-72"
            src={projects[selectedItemIndex].image}
            alt={projects[selectedItemIndex].title}
          />
          <div className="flex flex-col gap-5 ">
            <h1 className="text-secondary text-xl-2xl">
              {projects[selectedItemIndex].title}
            </h1>
            <div className="text-tertiary text-xl-2xl flex gap-4">
              Tech-Stack:
              {projects[selectedItemIndex].technologies.map((el, idx) => (
                <p key={idx}>{el}</p>
              ))}
            </div>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
