import React from 'react';
import styled from 'styled-components';

const StyledArticleList = styled.section`
  margin: 0 auto;

  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul {
    padding: 0;
  }

  .list-heading, .article-link {
    display: block;
    padding: 2rem 0 1rem 0;
    border-bottom: 1px solid var(--text);

    h2 {
      margin-bottom: 0;
    }
  }

  a {
    cursor: pointer;
    transition: all 0.25s;
    
    &:hover {
      p {
        color: var(--text);
      }
    }
  }
`;

export default function ArticleList({ children, articleNumber = 2, heading = "All Articles" }) {

  return (
    <StyledArticleList>
      {articleNumber > 1 && <div className="list-heading">
        <h2>{heading}</h2>
      </div>}
      <ul>
        {children}
      </ul>
    </StyledArticleList>
  )
}