import { BlogPost } from "../../types/blogs";
import { Heart, MessageSquareText, RefreshCw } from "lucide-react";

interface BlogPostItemProps {
   blogPost: BlogPost;
}

export default function BlogPostItem({ blogPost }: BlogPostItemProps) {
   return (
      <div className="flex items-center justify-center rounded-md max-w-2xl p-0 m-0 shadow-md">
         <div className="bg-card w-full p-0 m-0 rounded-md border border-border overflow-hidden">
            {blogPost.image ? (
               <img
                  className="w-full h-auto object-cover"
                  src={blogPost.image}
                  alt={blogPost.title}
               />
            ) : null}
            <div className="px-2 sm:px-4 py-2 max-w-full">
               <div className="font-semibold my-2 text-left text-copy-primary text-sm sm:text-lg">
                  {blogPost.title}
               </div>
               <div className="my-4 mx-1 text-copy-secondary text-sm sm:text-base overflow-hidden max-h-24">
                  {blogPost.text}
               </div>
               <div className="flex items-center justify-end gap-3 px-4 py-2  rounded-md">
                  <Heart
                     size={24}
                     className="hover:fill-red-600 hover:stroke-red-300"
                  />
                  <MessageSquareText size={24} />
                  <RefreshCw size={24} />
               </div>
            </div>
         </div>
      </div>
   );
}
