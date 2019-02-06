import React from "react";

import Character from "./Character";

// import { fetchCharacters } from '../actions'


import { connect } from 'react-redux';

const CharacterList = props => {
  // console.log("HI FROM CHARACTERLIST!")
  // console.log(props)
  
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

export default CharacterList;
