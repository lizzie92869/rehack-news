import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/saveActions';
import SavesList from './SavesList'
import { BodyStyle } from '../style';

class SavesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saves: [],
    };
  }

  setLike = (result) => {
    const newSaves = this.state.saves.map(save => {
        if (save.id !== result.id) return save;
        return result;
    })

    this.setState({
      saves: newSaves
    })
  }

  increaseCount = (story) => {
    const url = `http://localhost:3001/api/v1/saves/${story.id}`;

    const data = {
      id: story.id,
      objectID: story.objectID,
      title: story.title,
      url: story.url,
      likes: story.likes + 1
    }

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => this.setLike(result))
    .catch(error => console.error('Error:', error))
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/saves`)
    .then(response => response.json())
    .then(result => this.setState({saves: result}))
    .catch((error) => error)
  }

  deleteSave = (save) => {
    // this.props.actions.deleteSave(story);
    fetch(`http://localhost:3001/api/v1/saves/${save.id}`, {
      method: 'DELETE'
    }).then(response => response.json())
    .then(result => this.removeFromState(result))
    .catch(error => console.error('Error:', error))
  }

  removeFromState(result){
    const newSaves = this.state.saves.filter(save => save.id !== result.id)

    this.setState({
      saves: newSaves
    })
  }

  onSortByLikes = () => {
    function compare(a,b) {
      if (a.likes < b.likes)
        return -1;
      if (a.likes > b.likes)
        return 1;
      return 0;
    }

    const savesSortedByLikes = this.state.saves.sort(compare)

    this.setState({
      saves: savesSortedByLikes
    })
  }

  render() {
    return (
      <BodyStyle>
        <SavesList
          saves={this.state.saves}
          onDismiss={this.deleteSave}
          onLike={this.increaseCount}
          onSortByLikes={this.onSortByLikes}
        />
      </BodyStyle>
    )
  }
}

SavesContainer.propTypes = {
  saves: PropTypes.array.isRequired
};

//The mapStateToProps function recieves state from the store whenever state has changed and make data from that data available to the component as props.
function mapStateToProps(state, ownProps) {
  return {
    saves: state.saves.saves
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// The connect function is provided by Redux. It subscribes our container component to the store, so that it will be alerted when state changes.
export default connect(mapStateToProps, mapDispatchToProps)(SavesContainer);
