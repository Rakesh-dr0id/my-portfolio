import React from 'react';
import Header from '../../components/Header';

import About from './About';
import Contact from './Contact';
import Experiences from './Experiences';
import Footer from './Footer';
import Intro from './Intro';
import LeftSider from './LeftSider';
import Projects from './Projects';
import { useSelector } from 'react-redux';

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      {/* <Header /> */}

      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro className="z-50" />
          <About />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
};

export default Home;
