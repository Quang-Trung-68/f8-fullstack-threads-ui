import CommentItem from "@/components/Comments/CommentItem";
import PostItem from "@/components/Posts/PostItem";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function PostDetailView({ id, navigation }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/" + id,
        );
        if (!response.ok) throw new Error("Failed to fetch posts");

        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/" + id + "/comments",
        );

        if (!response.ok) throw new Error("Failed to fetch comments");

        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };

    Promise.all([fetchPost(), fetchComments()]).finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <PostItem isPermitDetailPost={false} {...post} navigation={navigation} />
      <div>
        {comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
}
