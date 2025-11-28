import { useDeck } from "@/contexts/DeckContext";
import Column from "./Column";
import AddColumnButton from "./AddColumnButton";
import HomeFeed from "@/components/Feeds/HomeFeed";
import SearchFeed from "@/components/Feeds/SearchFeed";
import ActivityFeed from "@/components/Feeds/ActivityFeed";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const ProfilePlaceholder = () => (
  <div className="p-4">Profile Feed (Coming Soon)</div>
);
const InsightsPlaceholder = () => (
  <div className="p-4">Insights Feed (Coming Soon)</div>
);
const ForYouPlaceholder = () => (
  <div className="p-4">For You Feed (Coming Soon)</div>
);
const FollowingPlaceholder = () => (
  <div className="p-4">Following Feed (Coming Soon)</div>
);
const GhostPostsPlaceholder = () => (
  <div className="p-4">Ghost Posts Feed (Coming Soon)</div>
);
const UnknownFeedPlaceholder = () => (
  <div className="p-4">Unknown Feed Type</div>
);

export default function Deck() {
  const { columns } = useDeck();

  const getInitialComponent = (type) => {
    switch (type) {
      case "home":
        return HomeFeed;
      case "search":
        return SearchFeed;
      case "activity":
        return ActivityFeed;
      case "profile":
        return ProfilePlaceholder;
      case "insights":
        return InsightsPlaceholder;
      case "for-you":
        return ForYouPlaceholder;
      case "following":
        return FollowingPlaceholder;
      case "ghost-posts":
        return GhostPostsPlaceholder;
      default:
        return UnknownFeedPlaceholder;
    }
  };

  const isSingleColumn = columns.length === 1;

  if (isSingleColumn) {
    return (
      <div className="flex h-[calc(100vh-4rem)] w-full justify-center p-4">
        <div className="flex gap-4">
          <Column
            key={columns[0].id}
            id={columns[0].id}
            title={columns[0].title}
            className="w-[638px] min-w-[638px]"
            feedComponent={getInitialComponent(columns[0].type)}
            isScrollable={true}
          />
          <div className="sticky top-1/2 -ml-2 h-fit -translate-y-1/2">
            <AddColumnButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <SimpleBar className="deck-scrollbar sticky top-0 h-[calc(100vh-4rem)] w-full">
      <div className="flex h-full min-w-max items-start justify-center p-4 pl-20">
        <div className="flex h-full gap-4">
          {columns.map((col) => (
            <Column
              key={col.id}
              id={col.id}
              title={col.title}
              className="w-[438px] min-w-[438px]"
              feedComponent={getInitialComponent(col.type)}
              isScrollable={true}
            />
          ))}
          <div className="-ml-2 flex h-full items-center">
            <AddColumnButton />
          </div>
        </div>
      </div>
    </SimpleBar>
  );
}
