import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--black);

  a {
    margin: auto;
  }
`;

export default function Nav() {

  return (
    <StyledNav>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/">Articles</Link>
      <Link className="nav-link" to="/about">About</Link>
      <a className="nav-link" href="https://twitter.com/gabrielzzarate">Twitter</a>
    </StyledNav>
  )
}