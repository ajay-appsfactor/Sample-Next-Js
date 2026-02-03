"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { EyeIcon, EyeOffIcon,  } from "lucide-react";
import Link from "next/link";

export default function LoginInner() {

  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-50 to-gray-200 p-6">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Small Logo */}
        {/* <Logo company={company} className="w-12 h-12" /> */}

        {/* Welcome Back Heading */}
        <h2 className="text-2xl font-extrabold mb-6 text-slate-800 animate-fade-in">
         Indo Amicus
        </h2>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800 font-extrabold">
              Log in to 
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
           

            <form  className="space-y-4">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="mb-1">
                  Email address<span className="text-rose-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  className="h-12"
                  placeholder="Email address"
                 
                />
               
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="mb-1">
                  Password<span className="text-rose-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    className="h-12"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                   
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[17px] text-gray-500 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOffIcon size={18} />
                    ) : (
                      <EyeIcon size={18} />
                    )}
                  </button>
                </div>
                
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-cyan-700 hover:underline"
                >
                  Forgotten your password?
                </Link>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-cyan-700 hover:bg-cyan-600 text-white flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                
              >
                Login Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
