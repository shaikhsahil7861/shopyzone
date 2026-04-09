import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Mock login
      localStorage.setItem("shopyzone-user", JSON.stringify({ email }));
      navigate("/");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-8 px-4">
      <Link to="/" className="text-3xl font-bold tracking-tight text-[#131921] mb-6">
        ShopyZone
      </Link>

      <Card className="w-full max-w-[350px] shadow-none border border-gray-300">
        <CardHeader>
          <CardTitle className="text-2xl font-normal">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-bold">Email or mobile phone number</label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-8 border-gray-400 focus-visible:ring-1 focus-visible:ring-[#e77600] focus-visible:border-[#e77600]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-8 border-gray-400 focus-visible:ring-1 focus-visible:ring-[#e77600] focus-visible:border-[#e77600]"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] rounded-sm border border-[#fcd200] shadow-sm h-8 font-normal"
            >
              Continue
            </Button>
          </form>

          <p className="text-xs mt-4 leading-relaxed">
            By continuing, you agree to ShopyZone's <span className="text-blue-600 hover:underline hover:text-[#c7511f] cursor-pointer">Conditions of Use</span> and <span className="text-blue-600 hover:underline hover:text-[#c7511f] cursor-pointer">Privacy Notice</span>.
          </p>

          <div className="mt-6 flex items-center gap-1 text-xs text-blue-600 hover:underline hover:text-[#c7511f] cursor-pointer group">
            <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#c7511f]" />
            Need help?
          </div>
        </CardContent>
      </Card>

      <div className="w-full max-w-[350px] mt-6 flex items-center gap-2">
        <div className="flex-grow h-[1px] bg-gray-300" />
        <span className="text-xs text-gray-500">New to ShopyZone?</span>
        <div className="flex-grow h-[1px] bg-gray-300" />
      </div>

      <Button 
        variant="outline"
        className="w-full max-w-[350px] mt-4 rounded-sm border-gray-300 shadow-sm h-8 font-normal text-xs"
      >
        Create your ShopyZone account
      </Button>

      <div className="mt-12 w-full max-w-7xl border-t border-gray-200 pt-8 pb-12 flex flex-col items-center gap-4">
        <div className="flex gap-8 text-xs text-blue-600">
          <span className="hover:underline hover:text-[#c7511f] cursor-pointer">Conditions of Use</span>
          <span className="hover:underline hover:text-[#c7511f] cursor-pointer">Privacy Notice</span>
          <span className="hover:underline hover:text-[#c7511f] cursor-pointer">Help</span>
        </div>
        <p className="text-[10px] text-gray-500">© 2026 ShopyZone.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}
