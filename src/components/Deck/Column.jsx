import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeck } from "@/contexts/DeckContext";
import { MoreHorizontal, Trash2, ArrowLeft } from "lucide-react";
import { memo, cloneElement, isValidElement, useMemo } from "react";
import { useColumnNavigation } from "@/hooks/useColumnNavigation";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const Column = memo(function Column({
  id,
  title,
  feedComponent: FeedComponent,
  className,
  isScrollable = true,
}) {
  const { removeColumn } = useDeck();
  
  const initialView = useMemo(() => <FeedComponent />, [FeedComponent]);
  
  const { currentView, push, pop, canGoBack } =
    useColumnNavigation(initialView);

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-black ${className}`}
    >
      <div className="flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-800">
        <div className="flex items-center gap-2">
          {canGoBack && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={pop}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        {id !== "home" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="text-red-600 focus:text-red-600"
                onClick={() => removeColumn(id)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Remove column
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      {isScrollable ? (
        <SimpleBar className="min-h-0 flex-1 overflow-y-auto p-0">
          {isValidElement(currentView)
            ? cloneElement(currentView, { navigation: { push, pop } })
            : currentView}
        </SimpleBar>
      ) : (
        <div className="flex-1 p-0">
          {isValidElement(currentView)
            ? cloneElement(currentView, { navigation: { push, pop } })
            : currentView}
        </div>
      )}
    </div>
  );
});

export default Column;
