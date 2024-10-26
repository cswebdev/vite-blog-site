import BlogPostList from './components/blogPostList'
import NavBar from './components/NavBar'
import { dummyData } from './data/dummyData'

function App() {


  return (
   <div className="bg-white">
   <NavBar />
   <div className='flex justify-center'> 
    <BlogPostList 
    blogPosts={dummyData}
    />
   </div>
   </div>
  )
}

export default App
