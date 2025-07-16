"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MotionDiv from "./motion-div";
import AiImage from "../ai-image";

const testimonials = [
  {
    quote: "Spriie is a game-changer. I finally feel confident in my online purchases because I can see real people using the products.",
    name: "Sarah L.",
    role: "Early Adopter",
    avatar: "SL",
    imageHint: "happy woman face",
  },
  {
    quote: "As a seller, Spriie lets me connect with customers authentically. My content does the selling, not aggressive ads.",
    name: "Michael B.",
    role: "Verified Seller",
    avatar: "MB",
    imageHint: "small business owner portrait",
  },
  {
    quote: "The trust score system is brilliant. It makes it so easy to find reliable sellers in a sea of options. I'm hooked!",
    name: "Jessica P.",
    role: "Power Shopper",
    avatar: "JP",
    imageHint: "smiling person face",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <MotionDiv className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Loved by Our First Users</h2>
          <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-foreground/70">
            Don't just take our word for it. Here's what our community is saying.
          </p>
        </MotionDiv>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <MotionDiv key={i} className="h-full">
              <Card className="h-full bg-background/50 border flex flex-col justify-between p-6 rounded-xl">
                <CardContent className="p-0">
                  <p className="font-body text-foreground/90 italic">"{testimonial.quote}"</p>
                </CardContent>
                <div className="flex items-center mt-6">
                  <Avatar>
                    <AiImage
                      prompt={testimonial.imageHint}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      isAvatar={true}
                     />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-headline font-semibold text-foreground">{testimonial.name}</p>
                    <p className="font-body text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
