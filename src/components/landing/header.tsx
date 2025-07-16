"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Header() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
        behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
             <Image src="/spriie-logo.png" alt="Spriie Logo" width={120} height={40} />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" onClick={handleScroll} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#trust" onClick={handleScroll} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Trust
            </Link>
            <Link href="#sellers" onClick={handleScroll} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Sellers
            </Link>
          </nav>
          <Button asChild>
            <Link href="#waitlist" onClick={handleScroll}>Join the Waitlist</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
