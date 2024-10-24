import { BlogPost } from "../types/blogs";
import BlogPostItem from "./BlogPostItem";

interface BlogPostListProps {
    blogPosts: BlogPost[];
}

export default function BlogPostList({
    blogPosts
}: BlogPostListProps) {
    return (
        <div className="space-y-2">
            {blogPosts.map((blogPost) => (
                <BlogPostItem 
                    key = {blogPost.id}
                    blogPost = {blogPost}
                />
            ))}
        </div>
    )
}