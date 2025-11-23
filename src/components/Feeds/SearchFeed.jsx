export default function SearchFeed() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Search</h1>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="rounded-xl border p-4 shadow-sm">
            <h3 className="font-semibold">Search Result {i + 1}</h3>
            <p className="text-gray-500">Description for result {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
