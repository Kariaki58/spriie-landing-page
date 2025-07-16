"use client";

import MotionDiv from "./motion-div";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const sellers = [
  { name: "TechNova", score: 98, category: "Electronics", avatar: "TN", imageHint: "/logo-1.jpeg" },
  { name: "Artisan Crafts", score: 95, category: "Handmade", avatar: "AC", imageHint: "/logo-2.jpg" },
  { name: "EcoWear", score: 99, category: "Fashion", avatar: "EW", imageHint: "/logo-3.avif" },
  { name: "Gourmet Pantry", score: 92, category: "Food", avatar: "GP", imageHint: "/logo-4.avif" },
  { name: "Homebody", score: 96, category: "Decor", avatar: "HB", imageHint: "/logo-5.jpg" },
  { name: "FitLife", score: 94, category: "Fitness", avatar: "FL", imageHint: "/logo-6.webp" },
];

export default function MultiSeller() {
  return (
    <section id="sellers" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <MotionDiv className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">A Thriving Multi-Seller Ecosystem</h2>
          <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-foreground/70">
            Discover a curated community of sellers who build their reputation through quality content and happy customers.
          </p>
        </MotionDiv>
        <MotionDiv>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {sellers.map((seller, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="transform transition-transform hover:-translate-y-2 duration-300 rounded-xl">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                           <Image
                            src={seller.imageHint}
                            alt={seller.name}
                            width={100}
                            height={100}
                            // isAvatar={true}
                           />
                          <AvatarFallback>{seller.avatar}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-headline text-xl font-bold">{seller.name}</h3>
                        <Badge variant="secondary" className="my-2">{seller.category}</Badge>
                        <div className="w-full mt-4">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-body text-foreground/70">Trust Score</span>
                            <span className="text-sm font-bold text-primary">{seller.score}%</span>
                          </div>
                          <Progress value={seller.score} className="h-2 [&>div]:bg-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </MotionDiv>
      </div>
    </section>
  );
}
