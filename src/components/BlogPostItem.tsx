import { BlogPost } from "../types/blogs";
import { Heart, MessageCircle, RefreshCw } from "lucide-react";

interface BlogPostItemProps {
   blogPost: BlogPost;
}

export default function BlogPostItem({ blogPost }: BlogPostItemProps) {
   return (
      <div className="flex items-center justify-center rounded-md  max-w-2xl">
         <div className="bg-white w-full p-0 m-0 rounded-md border border-neutral-200 overflow-hidden">
            {blogPost.image ? (
               <img
                  className="w-full h-auto object-cover"
                  src={blogPost.image}
                  alt={blogPost.title}
               />
            ) : null}
            <div className="px-2 sm:px-4 py-2 max-w-full">
               <div className="font-semibold my-2 text-left text-sm sm:text-lg">
                  {blogPost.title}
               </div>
               <div className="my-4 mx-1 text-sm sm:text-base text-wrap break-words overflow-hidden max-h-24">
                  {blogPost.text}
               </div>
               <div className="flex items-center justify-end gap-3 px-4 py-2 rounded-md border-slate-50 bg-slate-50">
                  <Heart
                     size={24}
                     fill="white"
                     strokeWidth={1.5}
                     className="hover:fill-red-600 hover:stroke-red-300"
                  />
                  <MessageCircle size={24} strokeWidth={1.5} fill="white" />
                  <RefreshCw size={24} strokeWidth={1.5} fill="white" />
               </div>
            </div>
         </div>
      </div>
   );
}
