import { useLoaderData, Link } from 'react-router-dom';

import Model from '../components/Model';
import "./PostDetails.scss"

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (

        <>
        
      <Model>
        <main className="details">
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className='btn'>
              Okay
            </Link>
          </p>
        </main>
      </Model>
        </>
    );
  }
  return (
    <Model>
      <main className="details">
        <p className="author">{post.author}</p>
        <p className="text">{post.body}</p>
      </main>
    </Model>
  );
}

export default PostDetails;

export async function loader({params}) {
  const response = await fetch('http://localhost:8080/posts/' + params.Id);
  const resData = await response.json();
  return resData.post;
  
}