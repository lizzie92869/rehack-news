import React, { Component } from 'react';
import {
  BodyStyle,
  WrapperBar,
  CommentsButtonBar,
  StoryContainerBar,
  Wrapper,
  CommentsButtonImg,
  StoryContainer,
  TitleLink,
  FooterLink,
  XButton
} from '../style';

class Saves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saves: [],
    };
  }

  componentDidMount() {
    fetch('/api/users/2')
    .then(response => response.json())
    .then(saves => this.setState({saves: saves})
    )
  }

  render() {
    return (
      <BodyStyle>
        <div className="saves">
          <WrapperBar>
            <CommentsButtonBar>CMTs</CommentsButtonBar>
            <StoryContainerBar>SAVED STORIES</StoryContainerBar>
          </WrapperBar>

          {this.state.saves.map(save =>
            <Wrapper key={save.objectID}>

              <CommentsButtonImg
                target="_blank"
                href={'https://news.ycombinator.com/item?id=' + save.objectID }>
                  <i className="fas fa-comment-dots"></i>
              </CommentsButtonImg>

              <StoryContainer>
                <TitleLink href={save.url}>{save.title}</TitleLink>
                <FooterLink href={save.url}>{save.url}</FooterLink>
              </StoryContainer>

              <XButton onClick={() => alert('delete this object')}>
                &#10006;
              </XButton>

            </Wrapper>
          )}
        </div>
      </BodyStyle>
    )
  }
}

export default Saves;