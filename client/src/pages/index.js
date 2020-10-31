import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Heading from '../components/Heading';
import animate from '../utils/animate';

export default function HomePage() {
  useEffect(() => {
    const heading = document.getElementsByClassName('section-head');
    const aboutLine = document.getElementsByClassName('section-line');
    console.log('heading', heading, aboutLine);
    animate.animateHome(heading, aboutLine);
  }, []);
  return (
    <div className="home view">
      <section className="standard-section-padding home-section">
        <div className="container center-text">
          <CSSTransition
            transitionName="fade"
            transitionAppear={true}
            timeout={200}
            transitionAppearTimeout={500}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={3000}
          >
            <Heading>Featured Work</Heading>
          </CSSTransition>
        </div>
      </section>
    </div>
  )
}