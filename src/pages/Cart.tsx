import { useCart } from "@/src/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "motion/react";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="bg-[#eaeded] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-8 rounded-md shadow-sm flex flex-col items-center text-center">
            <div className="bg-gray-100 p-6 rounded-full mb-6">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your ShopyZone Cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md">
              Your shopping cart lives to serve. Give it purpose — fill it with electronics, 
              fashion, or anything that makes you happy.
            </p>
            <Link to="/">
              <Button className="bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] rounded-md px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#eaeded] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-9">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h1 className="text-2xl font-medium mb-2">Shopping Cart</h1>
            <div className="flex justify-end mb-2">
              <span className="text-sm text-gray-500">Price</span>
            </div>
            <Separator className="mb-6" />

            <div className="space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col sm:flex-row gap-6 pb-6 border-bottom last:border-0"
                  >
                    <Link to={`/product/${item.id}`} className="w-full sm:w-44 h-44 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </Link>

                    <div className="flex-grow flex flex-col">
                      <div className="flex justify-between gap-4">
                        <Link to={`/product/${item.id}`} className="text-lg font-medium hover:text-[#c7511f] line-clamp-2">
                          {item.name}
                        </Link>
                        <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-green-700 mt-1">In Stock</p>
                      <p className="text-xs text-gray-500 mt-1">Eligible for FREE Shipping</p>
                      
                      <div className="mt-auto pt-4 flex items-center gap-4">
                        <div className="flex items-center border rounded-md bg-gray-50">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-1 text-sm font-medium border-x">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <Separator className="my-6" />
            <div className="flex justify-end">
              <p className="text-lg">
                Subtotal ({cartCount} items): <span className="font-bold">${cartTotal.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Checkout Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-md shadow-sm sticky top-24">
            <div className="flex items-center gap-2 text-green-700 mb-4">
              <div className="bg-green-700 rounded-full p-0.5">
                <Plus className="w-3 h-3 text-white rotate-45" />
              </div>
              <p className="text-xs">Your order qualifies for FREE Shipping</p>
            </div>
            
            <p className="text-lg mb-4">
              Subtotal ({cartCount} items): <span className="font-bold">${cartTotal.toFixed(2)}</span>
            </p>

            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="gift" className="rounded border-gray-300" />
              <label htmlFor="gift" className="text-sm">This order contains a gift</label>
            </div>

            <Button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] rounded-md shadow-sm font-normal">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
