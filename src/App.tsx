import BlogPostList from "./components/blogPostList";
import BottomBar from "./components/BottomBar";
import NavBar from "./components/NavBar";
import { dummyData } from "./data/dummyData";

function App() {
   return (
      <div className="bg-transparent m-0 p-0">
         <div className="fixed top-0 w-full">
            <NavBar />
         </div>
         <div className="flex flex-col ">
            <div className="flex justify-center w-full">
               <BlogPostList blogPosts={dummyData} />
            </div>
            <div className="fixed bottom-0 w-full">
               <BottomBar />
            </div>
         </div>
      </div>
   );
}

export default App;
