import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDeck } from "@/contexts/DeckContext";
import { Plus, Search, Activity, User, BarChart2, Rss } from "lucide-react";

export default function AddColumnButton() {
  const { addColumn } = useDeck();

  const options = [
    { type: "search", label: "Search", icon: Search },
    { type: "activity", label: "Activity", icon: Activity },
    { type: "profile", label: "Profile", icon: User },
    { type: "insights", label: "Insights", icon: BarChart2 },
    { type: "for-you", label: "For You", icon: Rss },
    { type: "following", label: "Following", icon: Rss },
    { type: "ghost-posts", label: "Ghost Posts", icon: Rss },
  ];

  return (
    <div className="flex h-full items-center justify-center px-4">
      <DropdownMenu>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-8 w-8 rounded-full border-dashed p-0 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add a column</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuContent align="start" className="w-56">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.type}
              onClick={() => addColumn(option.type)}
            >
              <option.icon className="mr-2 h-4 w-4" />
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
