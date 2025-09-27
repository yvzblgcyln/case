import React from "react";
import { LoginForm } from "@/components";
import Navbar from "@/components/navbar";

export default function Login() {
  return (
    <div className="flex bg-zinc-950 w-full h-full flex-col p-4 justify-center items-center gap-2">
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white">
          Sign In to Your Account
        </h2>
        <p className="text-zinc-400 mt-2">Welcome back to the crypto world.</p>
      </div>
      <LoginForm />
    </div>
  );
}
