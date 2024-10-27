import BlogPostList from './components/blogPostList'
import BottomBar from './components/BottomBar'
import NavBar from './components/NavBar'
import { dummyData } from './data/dummyData'

function App() {


  return (
   <div className="bg-white m-0 p-0">
   <NavBar />
   <div className='flex flex-col'>
    <div className='flex justify-center w-full'> 
      <BlogPostList 
      blogPosts={dummyData}
      />
    </div>
    <div className='sticky bottom-0'>
      <BottomBar />
    </div>
   </div>
   </div>
  )
}

export default App
