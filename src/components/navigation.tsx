// our props have two properties - a number, and a function that takes a number and returns void
// we can define this as an interface, or anonymously like this:
const Navigation: React.FC<{currentPage: number; setCurrentPage: (page: number) => void; favPage: boolean; setFavPage: (flage: boolean) => void}>
 = ({ currentPage, setCurrentPage, favPage, setFavPage }) => {

  const nextPage = () => {
    const newPageNumber = currentPage + 1;
    setCurrentPage(newPageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const newPageNumber = currentPage - 1;
      setCurrentPage(newPageNumber);
    }
  };

  const toggleFav = () => {
    if (favPage) {
      setFavPage(false);
      setCurrentPage(1);
    } else {
      setFavPage(true);
    }
  };

  if (!favPage)
    return (
      <div className="navigation">
        <div className="navigation__item">
          <button className="navigation__button" onClick={prevPage}>
            Prev Page
          </button>
        </div>
        <div className="navigation__item">
          <button className="navigation__button" onClick={toggleFav}>
            Show Favourites
          </button>
        </div>
        <div className="navigation__item">
          <button className="navigation__button" onClick={nextPage}>
            Next Page
          </button>
        </div>
      </div>
    );
  else
    return (
      <div className="navigation">
        <div className="navigation__item">
          <button className="navigation__button" onClick={toggleFav}>
            Show All
          </button>
        </div>
      </div>
    );
};

export default Navigation;
