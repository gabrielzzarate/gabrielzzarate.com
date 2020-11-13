import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	background: var(--black);
	color: #fff;
	padding: 60px 0;
  height: 400px;

  .row {
		margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: left;
    align-content: left;
    align-items: left;
  }

	a {
		color: #eeefe7;
	}

	.copyrightWrapper {
		text-align: center;
	}

	.copyright {
		color: #eeefe7;
		text-transform: uppercase;
		font-family: var(--heading-font);
		font-size: .75rem;
    letter-spacing: .05em;
		font-weight: bold;
	}

	h2 {
		margin-bottom: 0;
	}

	.mb-md {
		margin-bottom: 60px;
	}

	@media screen and (max-width: 700px) {
		padding: 60px 1.5rem;
	}
`;

const ContentStyles = styled.div`
  max-width: 700px;
	height: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1350px) {
    max-width: 800px;
  }

  @media screen and (max-width: 800px) {
    max-width: 600px;
  }

  @media screen and (max-width: 700px) {
    padding: 0 1.5rem;
  } 
`;

export default function Footer() {

  return (
    <StyledFooter>
			<ContentStyles>
				<div className="row">
					<div className="callout-content">
						<h2>Get in touch with <a className="underline" href="mailto:gabrielzzarate@gmail.com">Mail</a>{' '} , <a className="underline" href="https://tinyletter.com/gabrielzzarate" target="_blank" rel="noreferrer">The Newsletter</a></h2><br />
						<h2 className="mb-md">or find me on <a className="underline" href="https://github.com/gabrielzzarate" target="_blank" rel="noopener noreferrer"> Github</a> - <a className="underline" href="https://twitter.com/gabrielzzarate" target="_blank" rel="noopener noreferrer">Twitter</a> - <a className="underline" href="https://www.instagram.com/gabrielzzarate/" target="_blank" rel="noopener noreferrer">Instagram</a>
						</h2>
					</div>

				</div>
				<div className="copyrightWrapper">
					<span className="copyright">&copy; {new Date().getFullYear()} Gabriel Zarate</span>
				</div>
			</ContentStyles>
		</StyledFooter>)
}
