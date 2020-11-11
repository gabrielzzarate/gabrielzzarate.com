import React from 'react';
// import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Nav from '../Nav';

const HeaderStyles = styled.header`
  /* position: absolute;
	left: 45px;
	top: 45px; */

	/* @include tablet-small {
		left: 30px;
		top: 30px;
	} */

	a {
		font-family: var(--heading-font);
		text-transform: uppercase;
		letter-spacing: .8px;
    font-size: 0.75rem;
		transition: color .25s ease-in;

		&:first-of-type {
			padding-right: 15px;
		}
	}
`;

// function playHomeAnimation() {
//   return null;
// }

export default function Header() {

  return (
    <HeaderStyles>
      <CSSTransition
        classNames="navigation"
        timeout={4000}
        in={true}
      > 
      <>
        {/* <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link> */}
				<Nav />
      </>
      </CSSTransition>
    </HeaderStyles>
  )
}