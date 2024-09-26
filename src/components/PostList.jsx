import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import "./postlist.scss";

const PostList = ({}) => {
  const posts = useLoaderData();

  
  return (
    <>
      {posts.length > 0 && (
        <ul className="posts">
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

    </>
  );
};

export default PostList;
