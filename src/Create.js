import { useState } from 'react';
// import { onChange } from 'react';

const Create = () => {

    const [title, setTitle]= useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Taylor');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);
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

                <button>Add Blog</button>
                {/* <p>{title}</p> this is a test! our onChange is working */}
            </form>
        </div>
     );
}
 
export default Create;