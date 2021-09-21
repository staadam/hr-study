import React from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
// import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur ipsa accusamus quis suscipit hic ratione? Beatae dicta labore quis nam maxime, ea sapiente. Nulla veritatis neque tenetur alias! Harum.',
  },
  {
    title: 'New computers at school2',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur ipsa accusamus quis suscipit hic ratione? Beatae dicta labore quis nam maxime, ea sapiente. Nulla veritatis neque tenetur alias! Harum.',
    image: 'http://unsplash.it/500/400',
  },
  {
    title: 'New computers at school3',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur ipsa accusamus quis suscipit hic ratione? Beatae dicta labore quis nam maxime, ea sapiente. Nulla veritatis neque tenetur alias! Harum.',
  },
];

export const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article" /> : null}
          </ContentWrapper>
          <Button isBig>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};
