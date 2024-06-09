import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SavedRecipeButtonProps {
  component: React.ReactNode;
}

export function SavedRecipeButton({ component }: SavedRecipeButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#FFEA88] text-black font-medium hover:bg-[#FFEA88] border border-black w-auto px-4 py-2" variant="outline">
          Cheese Sandwich and Avocado
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto custom-scrollbar"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        <DialogHeader>
        </DialogHeader>
        {component}
      </DialogContent>
    </Dialog>
  );
}

