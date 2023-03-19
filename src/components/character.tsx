import { DisneyCharacter } from "../disney_character";
import { useFavourites} from "../FavCharacterContext";

interface CharacterProps{
	character: DisneyCharacter;
}

const Character: React.FC<CharacterProps> = ({ character }) => {

// We can then pull out both our favourites array and our toggleFavourites function from our useFavourites hook
const {favourites, toggleFavourites} = useFavourites();
  return (
    <article className="card">
      <h2>{character.name}</h2>

      {/* <div className="character-item__actions" onClick={() => toggleFavourites(character._id)}> */}
      <div className="character-item__actions" onClick={() => toggleFavourites(character)}>
        {/* {!favourites.includes(character._id) ? "Add to favourites" : "Favourite"} */}
        {favourites.filter((f) => f._id === character._id).length === 0 ? "Add to favourites" : "Favourite"}
      </div>

      <img
        src={character.imageUrl}
        alt={character.name}
      />
    </article>
  );
};

export default Character;
