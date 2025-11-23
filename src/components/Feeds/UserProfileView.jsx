import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import PostLists from "@/components/Posts/PostLists";

export default function UserProfileView({ userId, navigation }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock user data fetch
    const fetchUser = async () => {
      // Simulate fetch
      setUser({
        id: userId,
        name: "User " + userId,
        username: "user_" + userId,
        bio: "Fullstack Developer. Love React & Node.js",
        followers: 1234,
        following: 567,
      });
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        );
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    Promise.all([fetchUser(), fetchPosts()]).finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!user) return <div>User not found</div>;

  return (
    <div className="flex flex-col">
      <div className="p-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">@{user.username}</p>
          </div>
          <Avatar className="h-20 w-20">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${userId}`} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <p className="mt-4">{user.bio}</p>
        <div className="mt-4 flex gap-4 text-gray-500">
          <span>{user.followers} followers</span>
          <span>{user.following} following</span>
        </div>
        <Button className="mt-4 w-full rounded-xl border border-gray-300 bg-white text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
          Follow
        </Button>
      </div>

      <Tabs defaultValue="threads" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="threads"
            className="flex-1 rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-black data-[state=active]:shadow-none dark:data-[state=active]:border-white"
          >
            Threads
          </TabsTrigger>
          <TabsTrigger
            value="replies"
            className="flex-1 rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-black data-[state=active]:shadow-none dark:data-[state=active]:border-white"
          >
            Replies
          </TabsTrigger>
          <TabsTrigger
            value="reposts"
            className="flex-1 rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-black data-[state=active]:shadow-none dark:data-[state=active]:border-white"
          >
            Reposts
          </TabsTrigger>
        </TabsList>
        <TabsContent value="threads">
          <PostLists isPermitDetailPost={true} posts={posts} navigation={navigation} />
        </TabsContent>
        <TabsContent value="replies">
          <div className="p-8 text-center text-gray-500">No replies yet</div>
        </TabsContent>
        <TabsContent value="reposts">
          <div className="p-8 text-center text-gray-500">No reposts yet</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
