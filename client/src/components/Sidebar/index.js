import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import animate from '../../utils/animate';

const SidebarStyles = styled.div`
  border-right: 1px solid var(--ltgrey);
  height: 100%;
  width: 25%;

  .sidebar-inner {
    height: 100vh;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


    @media screen and (max-width: 450px) {
      border-right: 0;
      height: 250px;
    }
  }
`;

function SidebarHeading(props){
	const heading = props.heading;
	const projectName = props.projectName;

	if (heading === 'home'){
		return <div className="name">
			<h2>
				<span>G</span>
				<span>a</span>
				<span>b</span>
				<span>r</span>
				<span>i</span>
				<span>e</span>
				<span>l</span>
				<span>&nbsp;</span>
				<span>Z</span>
				<span>a</span>
				<span>r</span>
				<span>a</span>
				<span>t</span>
				<span>e</span>
			</h2>
			<span className="sub-head">Front-End Developer</span>
		</div>
	} else if (heading === 'about') {
		return <div className="name">
			<h2>
				<span>G</span>
				<span>a</span>
				<span>b</span>
				<span>r</span>
				<span>i</span>
				<span>e</span>
				<span>l</span>
				<span>&nbsp;</span>
				<span>Z</span>
				<span>a</span>
				<span>r</span>
				<span>a</span>
				<span>t</span>
				<span>e</span>
			</h2>
		</div>
	} else {
		return <div className="name">
			<h2>
				{ projectName }
			</h2>
		</div>
	}
}

export default function Sidebar() {
  useEffect(() => {
    const animatedLayerOne = document.getElementsByClassName('background-piece-left-color');
    const animatedLayerTwo = document.getElementsByClassName('background-piece-left-main');
    animate.transitionSidebar(animatedLayerOne, animatedLayerTwo);
  }, []);

  const isMobile = false;
  const project = null;
  return (
    <CSSTransition
      classNames="change-view"
      timeout={4000}
      in={true}
    >
      <SidebarStyles className={ (isMobile === false ? null : 'isMobile') + " navigation-sidebar " + ( project !== null ? project[0].projectURL : '') }>
      <div className="flex-row full-height middle-xs center-flex sidebar-inner">
      <CSSTransition
        classNames="heading"
        in={true}
        timeout={3000}
      >
        <SidebarHeading heading="home" projectName={project !== null ? project[0].projectName : null}  />
      </CSSTransition>
      </div>

        <div className="sidebar-background">
            <div style={ project !== null ? { backgroundColor: project[0].projectColor } : { backgroundColor: '#e8eaef' } } className="background-piece background-piece-left-color"></div>
            <div className="background-piece background-piece-left-main"></div>
          </div>
  </SidebarStyles>
			</CSSTransition>
  )
}