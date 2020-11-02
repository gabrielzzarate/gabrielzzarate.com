import React from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  position: absolute;
	left: 45px;
	top: 45px;

	/* @include tablet-small {
		left: 30px;
		top: 30px;
	} */

	a {
		color: var(--black);
		text-transform: uppercase;
    font-size: 1rem;
		letter-spacing: .8px;
		transition: color .25s ease-in;

		&:first-of-type {
			padding-right: 15px;
		}

		&:hover {
			color: var(--ltgrey);
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
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
      </>
      </CSSTransition>
    </HeaderStyles>
  )
}