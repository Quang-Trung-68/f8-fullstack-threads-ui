export default function ActivityFeed() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Activity</h1>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border p-4 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <div>
              <p className="font-medium">User {i + 1} liked your post</p>
              <p className="text-xs text-gray-500">2h ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
