import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackButton = () => {
  return (
    <button className="back">
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default BackButton;
