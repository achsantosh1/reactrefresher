import { MdPostAdd, MdMessage } from "react-icons/md";
import "./mainheader.scss";
import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className="button">
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
