import React, { useEffect, useRef } from 'react';
import Work from '../Components/Work';
import { personalDetails, workDetails, eduDetails } from '../Details';
import { gsap } from 'gsap';

function About() {
  const sectionOne = useRef();
  const sectionTwo = useRef();
  const sectionThree = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      sectionOne.current,
      {
        y: '-100%',
        delay: 0.5,
        opacity: 0,
        duration: 2,
        ease: 'Power3.easeOut',
      },
      '<'
    )
      .from(
        sectionTwo.current,
        {
          x: '-100%',
          delay: 0.2,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        sectionThree.current,
        {
          y: '100%',
          delay: 0.2,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      );
  }, []);
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section className="section-1" ref={sectionOne}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.about}
        </p>
      </section>
      <section ref={sectionTwo}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section ref={sectionThree}>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
