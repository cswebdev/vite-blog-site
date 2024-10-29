import { BlogPost } from "../../types/blogs";
import BlogPostItem from "./BlogPostItem";

interface BlogPostListProps {
  blogPosts: BlogPost[];
}

export default function BlogPostList({ blogPosts }: BlogPostListProps) {
  return (
    <div className="my-20 space-y-10">
      {blogPosts.map((blogPost) => (
        <BlogPostItem key={blogPost.id} blogPost={blogPost} />
      ))}
    </div>
  );
}
