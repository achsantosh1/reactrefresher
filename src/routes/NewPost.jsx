import Model from "../components/Model";
import "./newpost.scss"

import { Link, Form, redirect } from "react-router-dom";

const NewPost = () => {

  
  return (
    <Model>

    <Form method="post" className='form'>
        <p>
            <label htmlFor='body' >Text</label>
            <textarea id="body" name="body" required rows={3}  />
        </p> 
        <p>
            <label htmlFor='name'> Your Name</label>
            <input type='text' id='name' name="author" required  />
        </p>
        <p className="actions">
          <Link to='/'  type="button" className="button">Cancel</Link>
          <button className="button">Submit</button>
        </p>

    </Form>
    </Model>
  )
}

export default NewPost;

export async function action({request}){

  const formData= await request.formData();
  const postData= Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect('/');
}