import React, { useState, useContext } from "react";
import { DisneyCharacter } from "./disney_character";

// Instead of creating two separate Contexts, we instead create ONE that will hold an object containing BOTH our favourites array and our toggleFavourites function 
// const FavouritesContext = React.createContext<{favourites: number[], toggleFavourites: (favs: number) => void, favCharacters: DisneyCharacter[]; setFavCharacters: (favCh: DisneyCharacter[]) => void}>({ favourites: [], toggleFavourites: () => null, favCharacters: [], setFavCharacters: () => null});
const FavouritesContext = React.createContext<{favourites: DisneyCharacter[], toggleFavourites: (favs: DisneyCharacter) => void}>({ favourites: [], toggleFavourites: () => null});

// We then only need to create one hook
export function useFavourites() {
    return useContext(FavouritesContext)
}

export function FavCharacterProvider ({ children } : { children: React.ReactNode }) {

    // const [characterFavourites, setCharacterFavourites] = useState<Array<number>>([]);
    const [characterFavourites, setCharacterFavourites] = useState<Array<DisneyCharacter>>([]);
     
    // const toggleFavourites = (characterId : number) => {
       const toggleFavourites = (character : DisneyCharacter) => {
            // if (!characterFavourites.includes(characterId)){
        if (characterFavourites.filter((c) => c._id === character._id).length === 0){
            // setCharacterFavourites([...characterFavourites, characterId]);
            setCharacterFavourites([...characterFavourites, character]);
        } else {
            // const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
            const updatedFavourites = characterFavourites.filter((c) => c._id !== character._id);
            setCharacterFavourites(updatedFavourites);
        }
      }

    return(
        // And instead of wrapping TWO contexts around our children, we wrap ONE context and pass an object with our favourites and toggleFavourites
        <FavouritesContext.Provider value={{favourites: characterFavourites, toggleFavourites: toggleFavourites}}>
            {children}
        </FavouritesContext.Provider>
    )
}