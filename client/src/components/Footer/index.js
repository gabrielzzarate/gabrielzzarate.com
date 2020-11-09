import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	background: var(--black);
	color: #fff;
	padding: 60px 48px;
  height: 400px;

  .row {
    display: flex;
    height: 100%;
    justify-content: center;
    align-content: left;
    align-items: left;
  }

	a {
		color: #fff;

		&:hover {
			color: var(--grey);
		}
	}

	h2 {
		margin-bottom: 0;
    font-size: 28px;
	}
`;

export default function Footer() {

  return (
    <StyledFooter>
			<div className="row">
				<div className="callout-content">
					<h2>Get in touch with <a href="mailto:gabrielzzarate@gmail.com">Mail</a></h2><br />
					<h2>or find me on <a href="https://github.com/gabrielzzarate" target="_blank" rel="noopener noreferrer"> Github</a> - <a href="https://twitter.com/gabrilzzarate" target="_blank" rel="noopener noreferrer">Twitter</a> - <a href="https://www.linkedin.com/in/gabriel-zarate-95586979/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</h2>
				</div>
			</div>
		</StyledFooter>
  )
}
