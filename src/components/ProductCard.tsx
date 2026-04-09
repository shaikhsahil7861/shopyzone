import { Product } from "@/src/types";
import { useCart } from "@/src/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
        <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>
        <CardContent className="flex-grow p-4">
          <Link to={`/product/${product.id}`} className="block group">
            <h3 className="text-sm font-medium line-clamp-2 group-hover:text-[#c7511f] transition-colors h-10">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center mt-2 gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? "fill-[#febd69] text-[#febd69]" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-blue-600 hover:text-[#c7511f] cursor-pointer">
              {product.reviews.toLocaleString()}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-xs font-bold self-start mt-1">$</span>
            <span className="text-xl font-bold">{Math.floor(product.price)}</span>
            <span className="text-xs font-bold self-start mt-1">
              {(product.price % 1).toFixed(2).substring(2)}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">FREE delivery by ShopyZone</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] rounded-full border border-[#fcd200] shadow-sm font-normal text-sm"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
