import React from 'react';
import styled from 'styled-components';

const StyledArticleList = styled.div`
  max-width: 700px;
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
    padding: 2rem 0;
    border-bottom: 1px solid var(--black);
  }

  a {
    cursor: pointer;
    transition: all 0.25s;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;

export default function ArticleList() {

  return (
    <StyledArticleList>
      <div className="list-heading">
        <h2>All Articles</h2>
      </div>
      <ul>
        <li>
          <a className="article-link">
            <h2>The Mental Model Behind Every High-Performer I know</h2>
            <p>
              What makes the systems mindset so powerful, how we can use it to be more effective in our personal and professional lives, plus some common challenges with using it and how to overcome them.
            </p>
          </a>
        </li>
        <li>
          <a className="article-link">
            <h2>The Mental Model Behind Every High-Performer I know</h2>
            <p>
              What makes the systems mindset so powerful, how we can use it to be more effective in our personal and professional lives, plus some common challenges with using it and how to overcome them.
            </p>
          </a>
        </li>
        <li>
          <a className="article-link">
            <h2>The Mental Model Behind Every High-Performer I know</h2>
            <p>
              What makes the systems mindset so powerful, how we can use it to be more effective in our personal and professional lives, plus some common challenges with using it and how to overcome them.
            </p>
          </a>
        </li>
      </ul>
    </StyledArticleList>
  )
}