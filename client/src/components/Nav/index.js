import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  margin: 0 auto;
  height: 60px;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid #bebebe; */
  border-bottom: 1px solid var(--text);

  a {
    margin: auto;
  }
`;

export default function Nav() {

  return (
    <StyledNav>
      <Link className="nav-link" to="/">GABRIELZZARATE</Link>
      <Link className="nav-link" to="/blog">Articles</Link>
      <Link className="nav-link" to="/about">About</Link>
      <a className="nav-link" href="https://twitter.com/gabrielzzarate">Twitter</a>
    </StyledNav>
  )
}