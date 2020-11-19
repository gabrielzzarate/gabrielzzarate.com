import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Header from '../Header';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Footer from '../Footer';

const ContentStyles = styled.div`
  min-height: 80vh;
  flex: 1;
  max-width: 700px;
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

export default function Layout({ children, noHeader = false }) {

  console.log('noHead', noHeader);
	return (
		<>
			<GlobalStyles />
			<Typography />
				<ContentStyles>
          {!noHeader && <Header />}
					{children}
				</ContentStyles>
        <Footer />
		</>
	);
}
