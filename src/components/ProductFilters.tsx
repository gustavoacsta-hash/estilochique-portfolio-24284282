import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: ProductFiltersProps) => {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={cn(
              "rounded-full transition-all",
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            )}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};
