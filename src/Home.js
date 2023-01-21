
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    

    // const practice = 'practice makes perfect! :)';
    
    const title = 'All Blogs!';

   
    const encourage = 'Keep pushing forward';

    return ( 
        <div className="Home">
          {error && <div>{ error }</div>}  
          {isPending && <div>Loading...</div>}  
          {blogs && <BlogList blogs={ blogs } title={ title } paragraph='this here is a practice prop' />}
                <p>{ encourage }</p>
          {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'Margo R.')} title="Margo's Blogs"  handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default Home;