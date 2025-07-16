"use client";

import MotionDiv from "./motion-div";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, BarChart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        icon: <BadgeCheck className="w-8 h-8 text-primary" />,
        title: "Build Trust with Content",
        description: "Showcase your products through authentic content that resonates with buyers and builds lasting trust."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Connect with Real Shoppers",
        description: "Engage directly with a community that values transparency and is eager to discover new brands."
    },
    {
        icon: <BarChart className="w-8 h-8 text-primary" />,
        title: "Grow Your Brand, Your Way",
        description: "Leverage our platform to grow your reputation based on quality and customer satisfaction, not ad spend."
    }
];

export default function ForSellers() {
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
    <section id="for-sellers" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionDiv>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                    Empowering Sellers to Thrive
                </h2>
                <p className="mt-4 font-body text-lg text-foreground/70">
                    Spriie is more than a marketplace; it's a partnership. We provide the tools and the platform for you to build a business on the foundations of trust and authenticity.
                </p>
                <div className="mt-8 space-y-6">
                    {features.map(feature => (
                        <div key={feature.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">{feature.icon}</div>
                            <div>
                                <h3 className="font-headline font-semibold text-lg">{feature.title}</h3>
                                <p className="text-foreground/70 font-body">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-10">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                        <Link href="#waitlist" onClick={handleScroll}>Become a Verified Seller</Link>
                    </Button>
                </div>
            </MotionDiv>
             <MotionDiv className="flex items-center justify-center">
                <Card className="p-4 rounded-xl shadow-2xl transform transition-transform hover:scale-105 duration-300">
                    <Image
                        src="/business.jpg"
                        alt="A happy seller using Spriie"
                        width={600}
                        height={700}
                        className="rounded-lg"
                    />
                </Card>
            </MotionDiv>
        </div>
      </div>
    </section>
  );
}
