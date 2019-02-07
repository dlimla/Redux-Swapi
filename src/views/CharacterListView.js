import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchData } from '../actions';


// import actions
class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchData();
    // console.log(this.props.fetchData())
    // console.log("HI FROM MOUNT")
    // console.log(this.props)
    // console.log(this.props)
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>LOADING</div>
      )
      // console.log(this.props.fetching)
      // return something here to indicate that you are fetching data
    }
    // console.log(this.props.characters)
    else{

      return (
        <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
  }
}

const mstp = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.loading
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mstp, { fetchData })(CharacterListView);
