import "./post.scss"
import { Link } from "react-router-dom";

const Post = ({author,body,id}) => {

  return (
    <li className="post">
      <Link to={id}>
      <p className="author">{author}</p>
      <p className="text">{body}</p>
      </Link>
    </li>
  );
};

export default Post;
