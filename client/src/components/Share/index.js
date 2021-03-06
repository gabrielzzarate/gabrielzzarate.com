import React from 'react';
import styled from 'styled-components';

const StyledShare = styled.div`
  width: 50px;
  left: 0;
  bottom: 30vh;
  position: fixed;
  z-index: 999999;
  text-align: center;
  background: white !important;
  padding: 8px 5px 3px 5px;
  border-radius: 0 5px 5px 0;
  box-shadow: 2px 4px 6px 0px rgba(0,0,0,0.15);

  @media screen and (max-width: 900px) {
    left: initial;
    right: 0;
    bottom: 5vh;
    border-radius: 5px 0px 0px 5px;
  }

  a {
    display: block;
    padding: 5px 0;
  }
`;

export default function Share({ children }) {

  return (
    <StyledShare>
      {children}
    </StyledShare>
  )
}