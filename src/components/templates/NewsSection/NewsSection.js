import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper, Loading } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

export const query = `
{
  allArticles{
    id
    title
    category
    content
    image{
      url
      alt
    }
  }
}`;

export const url = 'https://graphql.datocms.com/';

export const NewsSection = ({ isClear = false }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        url,
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then((res) => setArticles(res.data.data.allArticles))
      .catch(() => setError("Sorry, couldn't load articles. Please try again later"));
  }, []);

  return (
    <Wrapper isClear={isClear}>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length > 0 && !error ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : error ? (
        <NewsSectionHeader>{error}</NewsSectionHeader>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};
