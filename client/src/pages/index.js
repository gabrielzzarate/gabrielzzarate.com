import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Heading from '../components/Heading';
import animate from '../utils/animate';
import PageWrapper from '../components/PageWrapper';

export default function HomePage() {
  useEffect(() => {
    const heading = document.getElementsByClassName('section-head');
    const aboutLine = document.getElementsByClassName('section-line');
    
    if (heading && heading.length && aboutLine && aboutLine.length) {
      console.log('heading', heading, aboutLine);
      animate.animateHome(heading, aboutLine);
    }
  }, []);
  return (
    <PageWrapper>
      <div className="home view">
        <section className="standard-section-padding home-section">
          <div className="container center-text">
            <CSSTransition
              classNames="fade"
              timeout={200}
            >
              <Heading>Featured Work</Heading>
            </CSSTransition>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}