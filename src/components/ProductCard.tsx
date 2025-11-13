import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/produtos/${product.slug}`}>
      <Card className="group overflow-hidden border-border/50 hover:border-border transition-all duration-300 hover-lift">
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {product.featured && (
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-sm">
                Destaque
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {product.category}
            </p>
            <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
