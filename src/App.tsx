import BlogPostList from './components/blogPostList'
import { dummyData } from './data/dummyData'

function App() {


  return (
   <>
   <div className='flex justify-center'>
    <BlogPostList 
    blogPosts={dummyData}
    />
   </div>
   </>
  )
}

export default App
