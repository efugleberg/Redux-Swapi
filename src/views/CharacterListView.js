import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions';
// import actions

class CharacterListView extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Your data is being fetched.</h2>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  fetching: state.charsReducer.isLoading,
  characters: state.charsReducer.characters,
  error: state.charsReducer.error
})
export default connect(
  mapStateToProps,
  {
    getCharacters
    /* action creators go here */
  }
)(CharacterListView);
