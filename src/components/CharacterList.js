import React from "react";

import Character from "./Character";

import { connect } from 'react-redux';

const CharacterList = props => {
  console.log("HI FROM CHARACTERLIST!")
  console.log(this.state.characters)
  return (
    <div>HI</div>
    // <ul>
    
    //   {props.characters.map(character => {
    //     return <Character key={character.name} character={character} />;
    //   })}
    // </ul>
  );
};

const mstp = state => {
  return {
    characters: state.characters
  }
}

export default connect(mstp)(CharacterList);
