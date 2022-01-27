import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchButton = () => {
    
  const searchBar = () => {
    let bar = document.getElementById("search");
    if (bar.style.display === "block") {
      bar.style.display = "none";
    } else {
      bar.style.display = "block";
    }
  };

  return (
    <button className="searchIcon" onClick={searchBar}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
};

export default SearchButton;
