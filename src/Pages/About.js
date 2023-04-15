import React, { useEffect, useRef } from 'react';
import Work from '../Components/Work';
import { personalDetails, workDetails, eduDetails } from '../Details';
import { gsap } from 'gsap';

function About() {
  const headingRef = useRef();
  const aboutRef = useRef();

  const WorkRef = useRef();
  const WorkDetailRef = useRef();

  const eduDetailsRef = useRef();
  const educationRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      headingRef.current,
      {
        y: '-100%',
        delay: 0.2,
        opacity: 0,
        duration: 2,
        ease: 'Power3.easeOut',
      },
      '<'
    )
      .from(
        aboutRef.current,
        {
          y: '-100%',
          delay: 0.4,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        WorkRef.current,
        {
          y: '-100%',
          delay: 0.8,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        WorkDetailRef.current,
        {
          y: '-100%',
          delay: 0.9,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        educationRef.current,
        {
          y: '-500%',
          delay: 1,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        eduDetailsRef.current,
        {
          y: '-120%',
          delay: 1.2,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      );
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section className="section-1">
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          ref={headingRef}
        >
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl" ref={aboutRef}>
          {personalDetails.about}
        </p>
      </section>
      <section>
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          ref={WorkRef}
        >
          Work Experience
        </h1>
        <div ref={WorkDetailRef}>
          {React.Children.toArray(
            workDetails.map(
              ({ Position, Company, Location, Type, Duration }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              )
            )
          )}
        </div>
      </section>
      <section>
        <h1
          className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          ref={educationRef}
        >
          Education
        </h1>
        <div ref={eduDetailsRef}>
          {React.Children.toArray(
            eduDetails.map(
              ({ Position, Company, Location, Type, Duration }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
