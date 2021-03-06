import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
// import animate from '../../utils/animate';
// import isServer from '../../utils/isServer';
// import Sidebar from '../Sidebar';
// import ArticleList from '../ArticleList';

const PageWrapperStyles = styled.div`

  main {
    width: 100%;
  }
`;

export default function PageWrapper({ children }) {
  // const animatedLayerOne = useRef(null);
  // const animatedLayerTwo = useRef(null);
  // const animatedLayerOne = document.getElementsByClassName('background-piece-right-color');
  // const animatedLayerTwo = document.getElementsByClassName('background-piece-right-main');
  useEffect(() => {
    // animate.animateHome();
    // animate.transitionMain(animatedLayerOne, animatedLayerTwo);
  }, []);

  return (
    <PageWrapperStyles>
      {/* <Sidebar /> */}
      <main>
        <CSSTransition
          in={true}
          classNames="change-view"
          timeout={200}
        >
          {children}         
        </CSSTransition>

      </main>
      <div className="main-background">
        <div className="background-piece background-piece-right-color"></div>
        <div className="background-piece background-piece-right-main"></div>
      </div>
    </PageWrapperStyles>
  )

}