"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, ShieldCheck } from "lucide-react";
import MotionDiv from "./motion-div";

const steps = [
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "Discover Real Content",
    description: "Explore genuine reviews, tutorials, and experiences from a community you can trust.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Choose Trusted Sellers",
    description: "Connect with sellers who are verified for their quality, transparency, and customer service.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Shop Confidently",
    description: "Make purchases with peace of mind, knowing your choice is backed by real-world proof.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <MotionDiv className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">A New Way to Shop</h2>
          <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-foreground/70">
            Three simple steps to a more honest and reliable e-commerce experience.
          </p>
        </MotionDiv>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0px 20px 30px -10px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="text-center h-full border-2 border-transparent hover:border-primary/50 transition-all duration-300 transform-gpu bg-card rounded-xl">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    {step.icon}
                  </div>
                  <CardTitle className="font-headline text-xl font-bold mt-4">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-foreground/80">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
