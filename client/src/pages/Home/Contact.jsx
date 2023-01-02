import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import Tilt from 'react-parallax-tilt';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-tertiary text-sm">{'{'}</p>
          {Object.keys(contact).map(
            (key, idx) =>
              key !== '_id' && (
                <p key={idx} className="ml-5">
                  <span className="text-tertiary text-sm">{key}: </span>{' '}
                  <span className="text-tertiary text-sm">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary">{'}'}</p>
        </div>

        <Tilt>
          <div className="h-[400px]">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_eroqjb7w.json"
              background="transparent"
              speed="1"
              hover
              autoplay
            ></lottie-player>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Contact;
