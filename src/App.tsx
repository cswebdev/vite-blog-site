import BlogPostList from './components/blogPostList'
import NavBar from './components/NavBar'
import { dummyData } from './data/dummyData'

function App() {


  return (
   <>
   <NavBar />
   <div className='flex justify-center'>
    <BlogPostList 
    blogPosts={dummyData}
    />
   </div>
   </>
  )
}

export default App
