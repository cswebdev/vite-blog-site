import { BlogPost } from "../../types/types";
import BlogPostItem from "./BlogPostItem";

interface BlogPostListProps {
   blogPosts: BlogPost[];
}

export default function BlogPostList({ blogPosts }: BlogPostListProps) {
   return (
      <div className="my-24 space-y-10 ">
         {blogPosts.map((blogPost) => (
            <BlogPostItem key={blogPost.id} blogPost={blogPost} />
         ))}
      </div>
   );
}
