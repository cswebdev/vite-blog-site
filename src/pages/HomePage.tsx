import BlogPostList from "../components/blogPosts/BlogPostList";
import SideBar from "../components/sidebar/Sidebar";
import { dummyData } from "../data/dummyData";
import { User } from "../types/types";

export default function HomePage() {
   const storedUser = localStorage.getItem("user");
   const user: User | null = storedUser ? JSON.parse(storedUser) : null;

   return (
      <>
         <div className="flex flex-col">
            <div className="flex w-full">
               <SideBar user={user} />
               <div className="flex justify-center w-full">
                  <BlogPostList blogPosts={dummyData} />
               </div>
            </div>
         </div>
      </>
   );
}
