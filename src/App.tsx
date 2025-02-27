import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import CharacterContainer from "./components/character_container";
import Navigation from "./components/navigation";
import { DisneyCharacter } from "./disney_character";
import { FavCharacterProvider } from "./FavCharacterContext";

const App: React.FC = () => {
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [favPage, setFavPage] = useState<boolean>(false);

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  useEffect(() => {
    const getCharacters = async (pageNumber: number) => {
      const apiResponse = await fetch(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
      const json = await apiResponse.json() as { data: DisneyCharacter[] };
      setCharacters(json.data);
    };
    getCharacters(currentPage);
  }, [currentPage]);

    return (
      <FavCharacterProvider>
        <div className="page">
          <Header currentPage={currentPage} favPage={favPage} />
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} favPage={favPage} setFavPage={setFavPage} />
          {/* <CharacterContainer characters={characters} /> */}
          {!favPage ? <CharacterContainer characters={characters} /> : <CharacterContainer characters={[]} />}
        </div>
      </FavCharacterProvider>
    );
};

export default App;