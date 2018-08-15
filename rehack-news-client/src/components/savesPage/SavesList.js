import React from 'react';
import PropTypes from 'prop-types';

import {
  WrapperBar,
  CommentsButtonBar,
  StoryContainerBar,
  Wrapper,
  CommentsButtonImg,
  StoryContainer,
  TitleLink,
  FooterLink,
  XButton,
  LikeButton
} from '../style';


const SavesList = ({saves, onDismiss, onLike, onSortByLikes}) => {
  return (
    <div className="saves">
      <WrapperBar>
        <CommentsButtonBar>CMTs</CommentsButtonBar>
        <StoryContainerBar>SAVED STORIES</StoryContainerBar>
        <button onClick={() => onSortByLikes()}>
          sort likes
        </button>
      </WrapperBar>

      {saves.map(save =>
        <Wrapper key={save.id}>

          <CommentsButtonImg
            target="_blank"
            href={'https://news.ycombinator.com/item?id=' + save.objectID }
          >
            <i className="fas fa-comment-dots"></i>
          </CommentsButtonImg>

          <StoryContainer>
            <TitleLink href={save.url}>{save.title}</TitleLink>
            <FooterLink href={save.url}>{save.url}</FooterLink>
          </StoryContainer>

          <LikeButton onClick={() => onLike(save)}>
            <i className="fas fa-heart"></i>  {save.likes}
          </LikeButton>

          <XButton onClick={() => onDismiss(save)}>
            &#10006;
          </XButton>

        </Wrapper>
      )}
    </div>
  )
}

SavesList.propTypes = {
  saves: PropTypes.array.isRequired
};


export default SavesList;
