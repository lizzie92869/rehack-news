import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

import {
  BodyStyle,
  WrapperBar,
  SearchButton,
  StyledInput,
  StyledInputFirst,
  StyledForm
} from '../style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
    return (
      <BodyStyle>
        <WrapperBar>
          <h2>Login</h2>
          <h4>welcome back! login to access your <i className="fas fa-heart"></i> saved stories.</h4>
        </WrapperBar>

        <WrapperBar>
          <StyledForm>

            <StyledInputFirst
              name="email"
              label="email"
              placeholder="EMAIL"
              value={this.state.credentials.email}
              onChange={this.onChange}/>


            <StyledInput
              name="password"
              label="password"
              type="password"
              placeholder="PASSWORD"
              value={this.state.credentials.password}
              onChange={this.onChange}/>

            <SearchButton
              type="submit"
              onClick={this.onSave}
            >
              <i className="fas fa-check"></i>
            </SearchButton>
          </StyledForm>
        </WrapperBar>

        <WrapperBar>
        </WrapperBar>
      </BodyStyle>
    );
  }
}
{/* <WrapperBar>
  <Search
    value={searchTerm}
    onChange={this.onSearchChange}
    onSubmit={this.onSearchSubmit}
  >
    <i className="fas fa-search"></i>
  </Search>
</WrapperBar>

<SearchButton type="submit">
  {children}
</SearchButton> */}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Login);

// import React, { Component } from 'react';
// import { Wrapper, BodyStyle } from '../style';
//
// class Login extends Component {
//
//   render() {
//     return (
//       <BodyStyle>
//         <Wrapper>
//           <h4>LOG IN HERE</h4>
//         </Wrapper>
//       </BodyStyle>
//     )
//   }
// }
//
// export default Login;
