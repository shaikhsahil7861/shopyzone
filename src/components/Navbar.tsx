import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "@/src/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const { cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-[#131921] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tight text-[#febd69]">ShopyZone</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-grow max-w-2xl relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white text-black rounded-l-md rounded-r-none border-none focus-visible:ring-0 h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit"
              className="bg-[#febd69] hover:bg-[#f3a847] text-[#131921] rounded-l-none rounded-r-md h-10 px-4"
            >
              <Search className="w-5 h-5" />
            </Button>
          </form>

          {/* Nav Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/login" className="hidden sm:flex flex-col items-start hover:outline hover:outline-1 hover:outline-white p-1 rounded">
              <span className="text-xs text-gray-300">Hello, sign in</span>
              <span className="text-sm font-bold flex items-center">Account & Lists</span>
            </Link>

            <Link to="/cart" className="flex items-center hover:outline hover:outline-1 hover:outline-white p-1 rounded relative">
              <div className="relative">
                <ShoppingCart className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 bg-[#febd69] text-[#131921] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
              <span className="hidden sm:block text-sm font-bold mt-3 ml-1">Cart</span>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#131921] text-white border-none">
                  <div className="flex flex-col gap-6 mt-10">
                    <Link to="/" className="text-lg font-bold">Home</Link>
                    <Link to="/login" className="text-lg font-bold">Account</Link>
                    <Link to="/cart" className="text-lg font-bold">Cart ({cartCount})</Link>
                    <form onSubmit={handleSearch} className="flex flex-col gap-2">
                      <Input
                        type="text"
                        placeholder="Search..."
                        className="bg-white text-black"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Button className="bg-[#febd69] text-[#131921] hover:bg-[#f3a847]">Search</Button>
                    </form>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
