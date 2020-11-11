import React from 'react';
import styled from 'styled-components';

const HeadingStyles = styled.div`
  /* visibility: hidden;
	opacity: 0; */

	.section-title {
		display: inline-block;
	    width: 35%;
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
		width: 65%;
		height: 1px;
		background: var(--text);
		/* transform-origin: top left; */
		/* transform: scaleX(0); */

		/* @include tablet-small {
			width: 100%;
		} */
	}
`;

export default function Heading({ children }) {

  return (
    <HeadingStyles className="section-head">
      <h1 className="section-title">{children}</h1>
      <span className="section-line" />
    </HeadingStyles>
  )
}