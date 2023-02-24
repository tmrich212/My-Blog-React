import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//NEW CODE INSERTION
import React from "react";
import ReactDOM from "react-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "swordfish",
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth,
    });
  }
  render() {
    const login = (
      <form action="#"
      onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );

//END OF CODE INSERTION

const Create = () => {

    const [title, setTitle]= useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Taylor');

    const [isPending, setIsPending] = useState(false);

    const history = useHistory();


    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author };
        
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added');
            setIsPending(true);
            history.push('/');
        })
    }

   


    return ( 
        <div className="create">
            <h2>Add A New Blog Post</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="">Blog Title:</label>
                <input type="text"
                value={ title }
                onChange={(e) => setTitle(e.target.value)} required/>

                <label htmlFor="">Blog Body:</label>
                <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required></textarea>

                <label htmlFor="">Blog Author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Taylor">Taylor</option>
                    <option value="New User">New User</option>
                </select>

                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{title}</p> this is a test! our onChange is working */}
            </form>
        </div>
     );
}
 
export default Create;
