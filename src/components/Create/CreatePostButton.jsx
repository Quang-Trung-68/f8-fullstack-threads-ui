import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CreatePostButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="h-16 w-16 rounded-2xl bg-black text-white shadow-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <Plus className="h-8 w-8" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Create</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
