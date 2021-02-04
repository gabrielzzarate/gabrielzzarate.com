import React from 'react';
import styled from 'styled-components';
import SEO from '../SEO';

const StyledResume = styled.section`

  .sub-section-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 40px;

    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }

    .sub-section {
      padding-right: 5px;

      @media screen and (max-width: 500px) {
        padding-right: 0;
        margin-bottom: 30px;
      }
    }
  }

  header, .resume-section {
    margin-bottom: 40px;
  }


  .detail-links {
    display: flex;
    color: var(--accent-text);

    a {
      display: inline-block;
      margin-right: 10px;
    }
  }

  .sub-section {
    .skills-item {
      font-size: 1rem;
      display: block;
      list-style: none;
      color: var(--accent-text);
	    font-family: var(--heading-font);

      a {
        color: var(--accent-text);
      }
    }
  }

  li {
    padding-bottom: 5px;
  }

  @media screen and (max-width: 700px) {
    h4 {
      line-height: 1.5 !important;
    }
  }

  .mobileShow {
    display: none;

    @media screen and (max-width: 700px) {
      display: block;
    }
  }
`;

export default function Resume({ showDetails = false }) {

  return (
    <StyledResume className="standard-section-padding">      
      <header>
        <SEO title="Gabriel Zarate" description="I'm a software engineer living in Brooklyn specializing in front-end development. I enjoy working with the latest web technologies to bridge the gap between complex software and creative design to create custom interfaces and experiences." image="https://www.gabrielzzarate.com/gabriel.jpeg" />
        <h1>Gabriel Zarate</h1>
        <div className={showDetails ? 'details inlineDetails' : 'details'}>
          <span className="metadata large">Software Engineer</span> 
          <div className="detail-links">
            <a href="https://github.com/gabrielzzarate" target="_blank" rel="noreferrer" className="underline">Github{ showDetails && ': @gabrielzzarate'}</a>
            <a href="mailto:gabrielzzarate" className="underline">Mail{ showDetails && ': gabrielzzarate@gmail.com'}</a> 
            <a href="tel:929-977-6042" className="underline">Phone{ showDetails && ': 929.977.6042'}</a>
          </div>
        </div>

        <p className="intro-one">I'm a software engineer living in Brooklyn specializing in front-end development. I enjoy working with the latest web technologies to bridge the gap between complex software and creative design to create custom interfaces and experiences.</p>  

        <p className="intro-two">In my career I've had the chance to work on high-performing teams with great people. I love my job because I have the opportunity to make a difference by confidently solving problems everyday.</p>
      </header>

      <div className="sub-section-wrapper">

      <div className="sub-section flex-row sub-lang">
        <h3 className="flex-col flex-forty sub-section-title">Languages</h3>
        <div className="flex-col flex-sixty sub-section-list">
          <span className="sub-section-list-item skills-item">
           JavaScript &bull; TypeScript
          </span>
          <span className="sub-section-list-item skills-item">
            Node
          </span>
          <span className="sub-section-list-item skills-item">
            Golang
          </span>
          <span className="sub-section-list-item skills-item">
            PHP
          </span>
        </div>
		  </div>

      <div className="sub-section flex-row sub-tech">
        <h3 className="flex-col flex-forty sub-section-title">Technologies</h3>
        <div className="flex-col flex-sixty sub-section-list">
          <span className="sub-section-list-item skills-item">
           React &bull; Redux
          </span>
          <span className="sub-section-list-item skills-item">
            NextJS &bull; GatsbyJS
          </span>
          <span className="sub-section-list-item skills-item">
            GraphQL &bull; Apollo &bull; Relay
          </span>
          <span className="sub-section-list-item skills-item">
            Styled Components
          </span>
        </div>
		  </div>

      <div className="sub-section flex-row sub-misc">
        <h3 className="flex-col flex-forty sub-section-title">Misc</h3>
        <div className="flex-col flex-sixty sub-section-list">
          <span className="sub-section-list-item skills-item">
           MongoDB
          </span>
          <span className="sub-section-list-item skills-item">
            Docker &bull; Kubernetes
          </span>
          <span className="sub-section-list-item skills-item">
            Google APIs &bull; Mapbox
          </span>
          <span className="sub-section-list-item skills-item">
            Jest &bull; Selenium
          </span>
        </div>
		  </div>
      </div>

      <h2>Experience</h2>
      <div className="resume-section">
        <h4><a className="underline" href="https://firststreet.org" target="_blank" rel="noreferrer">First Street Foundation</a> - <br className="mobileShow" />Brooklyn, NY. June 2018 - Present</h4>
        <span className="metadata">Lead Frontend Engineer - Node, TypeScript, GraphQL, Apollo, Next</span>

        <p>At First Street, I build and manage a variety of high-impact &amp; high-traffic products and sites. Working on a small team of developers, I am responsible for the full-stack of applications, writing GraphQL APIs in Node and Golang as well as React client-side. I am our lead front-end engineer and have consistently used latest technologies to raise the bar in our organization to build fast, well-tested applications.</p>

        <ul>
          <li>Built <a className="body-text underline" href="https://floodfactor.com" target="_blank" rel="noreferrer">Flood Factor</a> -- a flood damage visualization Next/GraphQL app which ingests data from the FSFAPI (one of the largest flood risk datasets in the country). Launched in July 2020, Flood Factor has over 1 million unique visitors with an average session duration of 3:14. I am currently building a new economic impact feature which will change how homebuyers view flood insurance and make big waves in the real estate industry.</li>
          <li>Built the <a href="https://firststreet.org/api/" target="_blank" rel="noreferrer" className="underline body-text">First Street Foundation API</a> and Development SDKs. Written in Go and launched in 2020, FSFAPI has received over 2 billion requests and has been integrated into a flood risk feature on <a className="body-text underline" href="https://realtor.com" target="_blank" rel="noreferrer">Realtor.com</a>.</li>
          <li>Built a services platform for the FSFAPI -- <a className="body-text underline" href="https://firststreet.dev" target="_blank" rel="noreferrer">Firststreet.dev</a> is a secure platform built in Next where users can get access to API Keys and track their API Usage. It also includes an admin panel with CRUD functionality to manage new users, permissions, API services, and products.</li>
          <li>I lead the collboration between engineering and design teams, working together to create the best possible interfaces and experiences.</li>
          <li>I consistently share new technologies with other engineers and seek to improve team processes to make us more efficient.</li>
        </ul>
      </div>

      <div className="resume-section">
        <h4><a className="underline" href="https://vertdigital.com" target="_blank" rel="noreferrer">Vert Digital</a> - <br className="mobileShow"/> Atlanta, GA. June 2016 - June 2018</h4>
        <span className="metadata">Front-End Developer - Wordpress, React, Redux</span>

        <p>
          At Vert Digital, I led our React/Redux projects and wrote custom web experiences in PHP and Wordpress. I developed digital marketing products for several large clients including NBC Universal and SweetWater Brewing.
        </p>

        <ul>
          <li>Worked with a small team of developers on a range of custom web based projects as well as small-scale React applications, including <a href="https://sweetwaterbrew.com" target="_blank" rel="noreferrer" className="body-text underline">SweetWater.com</a></li>
          <li>Increased the team's JavaScript capabilites, leading the transition from Angular based projects to React/Redux applications.</li>
          <li>Wrote a React/Redux web-marketing application for a digital marketing client connecting regional youth sports to local businesses for funding.</li>
          <li>Gained experience in mentoring junior developers.</li>
        </ul>
      </div>
    </StyledResume>  )
}