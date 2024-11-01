import { BlogPost } from "../../types/types";
import { Heart, MessageSquareText, RefreshCw } from "lucide-react";

interface BlogPostItemProps {
  blogPost: BlogPost;
}

export default function BlogPostItem({ blogPost }: BlogPostItemProps) {
  return (
    <div className="m-0 flex max-w-2xl items-center justify-center rounded-md p-0 shadow-md">
      <div className="m-0 w-full overflow-hidden rounded-md border border-border bg-card p-0">
        {blogPost.image ? (
          <img
            className="h-auto w-full object-cover"
            src={blogPost.image}
            alt={blogPost.title}
          />
        ) : null}
        <div className="max-w-full px-2 py-2 sm:px-4">
          <div className="my-2 text-left text-sm font-semibold text-copy-primary sm:text-lg">
            {blogPost.title}
          </div>
          <div className="mx-1 my-4 max-h-24 overflow-hidden text-sm text-copy-secondary sm:text-base">
            {blogPost.text}
          </div>
          <div className="flex items-center justify-end gap-3 rounded-md px-4 py-2">
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
