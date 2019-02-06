import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchData } from '../actions';

// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchData();
    console.log(this.state)
    // console.log(this.props)
    // call our action
  }

  render() {
    // console.log(this.props)
    if (this.props.fetching) {
      return "LOADING"
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mstp = state => {
  return {
    characters: state.charsReducer.characters
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mstp, { fetchData })(CharacterListView);
