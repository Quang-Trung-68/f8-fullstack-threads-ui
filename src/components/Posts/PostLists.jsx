import PostItem from "./PostItem";


const PostLists = ({ isPermitDetailPost, posts, navigation }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <PostItem
            key={post.id}
            isPermitDetailPost={isPermitDetailPost}
            navigation={navigation}
            {...post}
          />
        );
      })}
    </div>
  );
};

export default PostLists;
