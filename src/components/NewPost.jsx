import "./newpost.scss"
import { useState } from "react";

const NewPost = ({onCancel, onAddPost}) => {

  const [enteredBody, setEnteredBody] = useState("React.js");
  const [enteredAuthor, setEnteredAuthor] = useState("Santosh");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData= {
      body: enteredBody,
      author: enteredAuthor,
    }
    onAddPost(postData);
    onCancel();
    // console.log(postData);

  }
    
  return (
    <form className='form' onSubmit={submitHandler}>
        <p>
            <label htmlFor='body' >Text</label>
            <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p> 
        <p>
            <label htmlFor='name'> Your Name</label>
            <input type='text' id='name' required  onChange={authorChangeHandler}/>
        </p>
        <p className="actions">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>

    </form>
  )
}

export default NewPost