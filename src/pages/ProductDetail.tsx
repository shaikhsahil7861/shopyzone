import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "@/src/constants";
import { useCart } from "@/src/CartContext";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-xs text-gray-500">
        <Link to="/" className="hover:underline">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="hover:underline cursor-pointer">{product.category}</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-700 font-medium truncate">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Image Section */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="sticky top-24 border rounded-lg overflow-hidden bg-gray-50 aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="md:col-span-7 lg:col-span-5">
          <h1 className="text-2xl md:text-3xl font-medium text-[#0f1111] leading-tight">
            {product.name}
          </h1>
          <div className="flex items-center mt-2 gap-4">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold">{product.rating}</span>
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
            </div>
            <span className="text-sm text-blue-600 hover:text-[#c7511f] cursor-pointer">
              {product.reviews.toLocaleString()} ratings
            </span>
          </div>

          <Separator className="my-4" />

          <div className="flex items-baseline gap-1">
            <span className="text-sm font-medium self-start mt-1">$</span>
            <span className="text-3xl font-medium">{product.price.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-bold text-sm">About this item</h3>
              <p className="text-sm text-[#0f1111] mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>
            <ul className="list-disc list-inside text-sm space-y-1 text-[#0f1111]">
              <li>High-quality materials for durability</li>
              <li>Sleek and modern design</li>
              <li>Top-rated by customers worldwide</li>
              <li>1-year limited warranty</li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center text-center gap-2">
              <RotateCcw className="w-6 h-6 text-[#c7511f]" />
              <span className="text-[10px] font-medium text-blue-600">30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="w-6 h-6 text-[#c7511f]" />
              <span className="text-[10px] font-medium text-blue-600">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#c7511f]" />
              <span className="text-[10px] font-medium text-blue-600">1-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* Buy Section */}
        <div className="md:col-span-12 lg:col-span-3">
          <div className="border rounded-lg p-4 space-y-4 sticky top-24">
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-medium self-start mt-1">$</span>
              <span className="text-2xl font-medium">{product.price.toFixed(2)}</span>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm">
                FREE delivery <span className="font-bold">Tomorrow</span>. Order within <span className="text-green-700 font-medium">10 hrs 20 mins</span>
              </p>
              <p className="text-sm text-blue-600 hover:text-[#c7511f] cursor-pointer">
                Deliver to New York 10001
              </p>
            </div>

            <div className="space-y-2 pt-4">
              <Button 
                className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] rounded-full border border-[#fcd200] shadow-sm font-normal"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
              <Button 
                className="w-full bg-[#ffa41c] hover:bg-[#fa8914] text-[#0f1111] rounded-full border border-[#ff8f00] shadow-sm font-normal"
              >
                Buy Now
              </Button>
            </div>

            <div className="text-xs space-y-1 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Ships from</span>
                <span>ShopyZone</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Sold by</span>
                <span>ShopyZone Retail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
