import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap, { TimelineMax } from 'gsap';
import VisibilitySensor from 'react-visibility-sensor';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import animate from '../utils/animate';
import PageWrapper from '../components/PageWrapper';
import { CSSPlugin } from 'gsap/CSSPlugin'

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)

const AboutPageStyles = styled.div`
	.about-container {
		padding-top: calc(45vh - 1.6rem);
	}

.about-intro-paragraph {
	visibility: hidden;
	opacity: 0;
	margin-bottom: 3rem;
	/* @include font-size(25px);

	@include tablet-small {
		@include font-size(20px);
	} */
}

.about-section {

	/* @include tablet-small {
		padding: 20px !important;
	} */
}

// Section Head

.section-head {

	/* @include tablet-small {
		text-align: left;
	} */

	.section-title {
		display: inline-block;
		width: 40%;
		font-size: 2.6rem;
		transform-origin: center left 0;

	    /* @include desktop-small {
	    	font-size: 2.2rem;
	    }

	    @include vertical {
	    	font-size: 2rem;
	    }

	    @include tablet-small {
			font-size: 1.6rem;
			width: 100%;
			margin-bottom: 0;
	    }

	    @include mobile {
	    	@include font-size(28px);
	    } */
	}

	.section-line {
		display: inline-block;
		width: 60%;
		height: 1px;
		background: var(--text);
		transform-origin: top left;
		transform: scaleX(0);

		/* @include tablet-small {
			width: 100%;
		} */
	}
}

.section-head {
	visibility: hidden;
	opacity: 0;

	&.about {
		margin-top: 100px;
	}

	&.home {
		padding: 30px 0 20px 30px;

		/* @include mobile {
			padding: 30px 0 20px 0;
		} */
	}
}

// Sub Section

.sub-section {
	visibility: hidden;
	opacity: 0;
	padding-bottom: 4.5rem;
	padding-top: 4.5rem;

	@media screen and (max-width: 700px) {
		padding: 3rem 0;
	}
	

	.sub-section-head {
		font-size: 1.2rem;
		letter-spacing: .4px;
		text-transform: uppercase;
		-webkit-transform-origin: center left 0;
		transform-origin: center left 0;
	}

	.sub-section-list {
		font-size: 1.4rem;
		line-height: 1.5em;
		letter-spacing: .3px;
		color: #787878;

		span {
			display: block;
		}
	}
}

.sub-section-title {
	/* @include tablet-small {
		padding-bottom: 15px;
	} */
}

.sub-section-list-item {
	color: var(--accent-text);
	font-family: var(--heading-font);
	
}

.flex-row {
	display: flex;
}

.flex-forty {
	flex-basis: 40%;
  max-width: 40%;

	@media screen and (max-width: 700px) {
		flex-basis: 50%;
  	max-width: 50%;
	}
}

.flex-sixty {
	flex-basis: 60%;
  max-width: 60%;

	@media screen and (max-width: 700px) {
		flex-basis: 50%;
  	max-width: 50%;
	}
}

.intro-two {
	margin-bottom: 150px;

	@media screen and (max-width: 700px) {
		margin-bottom: 100px;
	}
}

.about-head {
	margin-bottom: 60px;
}

p {
	font-size: 1.2rem;
}
`;


function cbSub() {
	//console.log('sub ANIMATE');
}

function AboutSubSectionSkills(props) {
	return (
		<div className="sub-section flex-row sub-about">
			<h3 className="flex-col flex-forty sub-section-title">Interests</h3>
			<div className="flex-col flex-sixty sub-section-list">
				<span className="sub-section-list-item skills-item">
					Reading &bull; Music
				</span>
				<span className="sub-section-list-item skills-item">
					Design &bull; Fashion
				</span>
				<span className="sub-section-list-item skills-item">
					Grilling
				</span>
				<span className="sub-section-list-item skills-item">
					Keyboards
				</span>
				<span className="sub-section-list-item skills-item">Premier League &bull; Disc Golf</span>
			</div>
		</div>
	);
}

function AboutGear(props) {
	return (
		<div className="sub-section flex-row sub-gear">
			<h3 className="flex-col flex-forty sub-section-title">Favorite Gear</h3>
			<div className="flex-col flex-sixty sub-section-list">
				<span className="sub-section-list-item gear-item">
					Fujifilm XT3
				</span>
				<span className="sub-section-list-item gear-item">
					Novelkeys NK65
				</span>
				<span className="sub-section-list-item gear-item">
					Field Notes
				</span>
			</div>
		</div>
	);
}

function AboutSubSectionOtherTech(props) {
	return (
		<div className="sub-section flex-row sub-tech">
			<h3 className="flex-col flex-forty sub-section-title">
				Technologies
			</h3>
			<div className="flex-col flex-sixty sub-section-list">
				<span className="sub-section-list-item tech-item">React &bull; TypeScript</span>
				<span className="sub-section-list-item tech-item">GraphQL &bull; Node</span>
				<span className="sub-section-list-item tech-item">
					Next &bull; Gatsby
				</span>
				<span className="sub-section-list-item tech-item">
					Styled Components
				</span>
			</div>
		</div>
	);
}


function About() {
  const [visibilitySectionActive, setSectionActive] = useState(false);
  const [visibilitySkillsActive, setSkillsActive] = useState(false);
	const [visibilityTechActive, setTechActive] = useState(false);
	const [visibilityGearActive, setGearActive] = useState(false);

  useEffect(() => {
		const heading = document.getElementsByClassName('section-head');
		const aboutLine = document.getElementsByClassName('section-line');
		
		const introOne = document.getElementsByClassName('intro-one');
		const introTwo = document.getElementsByClassName('intro-two');
		const aboutHead = document.getElementsByClassName('about-head');
    
    if (heading && heading.length && aboutLine && aboutLine.length) {
			animate.animateAboutStart(introOne);
			animate.animateAboutStart(introTwo);
			animate.animateAboutStart(aboutHead);
		}
		
    setSectionActive(true);
    setSkillsActive(true);
		setTechActive(true);
		setGearActive(true);
  }, []);

  const onChangeSection = (isVisible) => {
    if (isVisible) {
			animate.animateAboutSection();

      setSectionActive(false);
    }
	}

  const onChangeSubSectionSkills = (isVisible) =>  {
		if (isVisible) {
			const timelineSubSectionSkills = new TimelineMax({ onComplete: cbSub });
			const subSectionSkills = document && document.getElementsByClassName('sub-about');
			const skillsListItem = document && document.getElementsByClassName('skills-item');

      animate.animateSubSectionSkills(timelineSubSectionSkills, subSectionSkills, skillsListItem);
      

      setSkillsActive(false);
		}
	}

	const onChangeSubSectionGear = (isVisible) => {
		if (isVisible) {
			const timelineSubSectionGear = new TimelineMax({ onComplete: cbSub });
			const subSectionTech = document && document.getElementsByClassName('sub-gear');
			const techListItem = document && document.getElementsByClassName('gear-item');
			animate.animateSubSectionTech(timelineSubSectionGear, subSectionTech, techListItem);

      
      setGearActive(false);
		}
  }

	const onChangeSubSectionTech = (isVisible) => {
		if (isVisible) {
			const timelineSubSectionTech = new TimelineMax({ onComplete: cbSub });
			const subSectionTech = document && document.getElementsByClassName('sub-tech');
			const techListItem = document && document.getElementsByClassName('tech-item');
      animate.animateSubSectionTech(timelineSubSectionTech, subSectionTech, techListItem);
      
      setTechActive(false);
		}
  }
  
  return (
		<AboutPageStyles>
    <PageWrapper>
			<div className="about view">
			<SEO title="About" />
				{/* <section>
					<h1>Gabriel Zarate</h1>
				</section> */}
				<section className="standard-section-padding about-section">
					<div className="flex-row full-height bottom-xs">
						<div className="container slimmer-container about-container">
							<h1 className="about-head">Gabriel Zarate</h1>
							<p className="about-intro-paragraph intro-one">
								I'm a software engineer living in Brooklyn specializing in front-end
								development. I enjoy working with the latest web technologies to
								bridge the gap between complex software and design to create
								custom interfaces and experiences.
							</p>
							<p className="about-intro-paragraph intro-two">
								I work with a great team of people at <a className="underline body-text" href="http://firststreet.org" target="_blank" rel="noreferrer">First Street Foundation</a>. I love my work because I have the
								opportunity to make a difference by creatively solving
								problems everyday.{' '}
							</p>
							<VisibilitySensor
								onChange={onChangeSection}
								active={visibilitySectionActive}
								>
								<Heading>About Me</Heading>
							</VisibilitySensor>

							<VisibilitySensor
								onChange={onChangeSubSectionSkills}
								active={visibilitySkillsActive}
								>
								<AboutSubSectionSkills />
							</VisibilitySensor>

							<VisibilitySensor
								onChange={onChangeSubSectionGear}
								active={visibilityGearActive}
								>
								<AboutGear />
							</VisibilitySensor>

							<VisibilitySensor
								onChange={onChangeSubSectionTech}
								active={visibilityTechActive}
								>
								<AboutSubSectionOtherTech />
							</VisibilitySensor>
						</div>
					</div>
				</section>
			</div>
  </PageWrapper>
		</AboutPageStyles>
  )
}

export default About;