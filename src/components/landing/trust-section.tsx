"use client";

import MotionDiv from "./motion-div";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Star } from "lucide-react";
import AiImage from "../ai-image";

const trustFeatures = [
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Verified Seller Badges",
    description: "Sellers undergo a verification process to earn your trust.",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Content Timestamps",
    description: "Know exactly when content was created for up-to-date relevance.",
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Peer-Reviewed Metrics",
    description: "Community-driven ratings that reflect genuine user satisfaction.",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionDiv>
            <Badge variant="outline" className="text-primary border-primary">Why Trust Matters</Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4 text-foreground">
              Built on a Foundation of Trust
            </h2>
            <p className="mt-4 font-body text-lg text-foreground/70">
              At Spriie, trust isn't an afterthought—it's the core of our platform. We use transparent, content-driven signals to help you shop with confidence.
            </p>
            <div className="mt-8 space-y-6">
              {trustFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-headline font-semibold text-lg">{feature.title}</h3>
                    <p className="text-foreground/70 font-body">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
          
          <MotionDiv className="space-y-6">
            <Card className="overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300 rounded-xl">
              <CardHeader>
                <CardTitle className="font-headline text-lg">Case Study: The Perfect Camera</CardTitle>
              </CardHeader>
              <CardContent>
                <AiImage
                  prompt="professional photo of a modern camera on a table"
                  alt="Camera review"
                  width={600}
                  height={400}
                  className="rounded-lg mb-4"
                />
                <p className="font-body text-foreground/80">
                  "I watched three video reviews on Spriie from verified creators. I knew exactly what to expect and bought from a 5-star seller. No surprises, just a great product."
                </p>
                <p className="font-body font-semibold text-right mt-2">- Alex Johnson</p>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
