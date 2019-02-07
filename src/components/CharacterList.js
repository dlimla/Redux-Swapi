import React from "react";

import Character from "./Character";

const CharacterList = props => {
  // console.log("HI FROM CHARACTERLIST!")
  // console.log(props)
  
  return (
    // <div>HI</div>
    <ul>
    
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
