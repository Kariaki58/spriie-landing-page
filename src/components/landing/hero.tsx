"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./animated-background";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);

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
    <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Buy With <span className="text-primary">Trust</span>, Not Just Ads
          </h1>
          <p className="mt-6 max-w-3xl mx-auto font-body text-lg md:text-xl text-foreground/80">
            Spriie is the content-first e-commerce platform that empowers you with honest reviews, trusted sellers, and content that builds trust.
          </p>
          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg">
              <Link href="#waitlist" onClick={handleScroll}>Join the Waitlist</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
