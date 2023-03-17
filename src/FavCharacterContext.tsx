import React, { useState, useContext } from "react";

// Instead of creating two separate Contexts, we instead create ONE that will hold an object containing BOTH our favourites array and our toggleFavourites function 
const FavouritesContext = React.createContext<{favourites: number[], toggleFavourites: (favs: number) => void}>({ favourites: [], toggleFavourites: () => null});

// We then only need to create one hook
export function useFavourites() {
    return useContext(FavouritesContext)
}

export function FavCharacterProvider ({ children } : { children: React.ReactNode }) {

    const [characterFavourites, setCharacterFavourites] = useState<Array<number>>([]);

    const toggleFavourites = (characterId : number) => {
        if (!characterFavourites.includes(characterId)){
            setCharacterFavourites([...characterFavourites, characterId])
        }
        else {
          const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
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