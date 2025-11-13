import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCTS_PER_PAGE = 12;

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todos" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold">
            Nossa Coleção
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore peças cuidadosamente selecionadas para complementar seu estilo
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </div>

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              Nenhum produto encontrado com os filtros selecionados.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("Todos");
                setSearchQuery("");
              }}
              className="mt-6"
            >
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-10 h-10 rounded-full"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
