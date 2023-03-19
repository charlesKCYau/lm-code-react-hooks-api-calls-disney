import React from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";
import { useFavourites } from "../FavCharacterContext";

interface CharacterContainerProps {
  characters: Array<DisneyCharacter>;
}

const CharacterContainer: React.FC<CharacterContainerProps> = ({characters }) => {
  const {favourites} = useFavourites();

  if (characters.length !== 0)
    return (
      <div className="card-container">
        {characters.map((character) => (
          <Character 
                  key={character._id}
                  character={character}
          />
        ))}
      </div>
    );
  else 
    return (
      <div className="card-container">
        {favourites.map((character) => (
          <Character 
                  key={character._id}
                  character={character}
          />
        ))}
      </div>
    );
};

export default CharacterContainer;
