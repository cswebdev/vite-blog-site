import BlogPostList from "../components/blogPosts/BlogPostList";
import { dummyData } from "../data/dummyData";

export default function HomePage() {
   return (
      <>
         <div className="flex flex-col">
            <div className="flex justify-center w-full">
               <BlogPostList blogPosts={dummyData} />
            </div>
         </div>
      </>
   );
}
