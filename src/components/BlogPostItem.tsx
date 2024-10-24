import { BlogPost } from "../types/blogs";

interface BlogPostItemProps{
    blogPost: BlogPost;
}

export default function BlogPostItem({blogPost}: BlogPostItemProps) {
    return (
    <div className="flex items-center gap-1 md:container md:mx-auto">
        <div className="bg-slate-100 rounded-md">
            <div className="font-semibold my-2 mx-1 text-center">{blogPost.title}</div>
            <div>
                <img className="max-h-96 md:mx-auto md:my-auto" src={blogPost.image} alt={blogPost.title}></img>
            </div>
            <div className="my-4 mx-1">{blogPost.text}</div>
        </div>
    </div>
    )
  
}