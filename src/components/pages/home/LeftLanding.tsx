"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { AnimationSection } from "./AnimationSection";

export function LeftLanding() {
  return (
    <div className="flex-1 flex flex-col items-center md:items-start">
      <HeaderSection />
      <FormSection />
      <IconSection />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="flex-1 flex flex-col items-center md:items-start">
      <AnimationSection />
      <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 text-center md:text-left">
        USERS
        <br />
        TRUST US
      </h1>
    </div>
  );
}

function FormSection() {
  return (
    <form className="flex w-full max-w-md mb-8">
      <input
        type="text"
        placeholder="Email/Phone number"
        className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-r-md hover:bg-yellow-500 transition"
      >
        Sign Up
      </button>
    </form>
  );
}

function IconSection() {
  return (
    <div className="flex flex-row gap-4 w-full max-w-md justify-between">
      <div className="flex flex-col  gap-2">
        <span className="text-gray-500 text-sm">Or Continue With</span>
        <div className="flex gap-2">
          <Button className="icon-button">
            <FaGoogle />
          </Button>
          <Button className="icon-button">
            <FaApple />
          </Button>
        </div>
      </div>

      <div className="flex flex-col  gap-2">
        <span className="text-gray-500 text-sm">Download App</span>
        <div>
          <Button className="icon-button">
            <MdDownload />
          </Button>
        </div>
      </div>
    </div>
  );
}
