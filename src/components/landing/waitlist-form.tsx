"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import MotionDiv from "./motion-div";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function WaitlistForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); 
    toast({
      title: "You're on the list! 🎉",
      description: "Thanks for joining the waitlist. We'll be in touch soon.",
    });
    form.reset();
  }

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <MotionDiv className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Be First. Win Big.</h2>
          <p className="mt-4 font-body text-lg text-foreground/70">
            The first users will be the biggest winners on Spriie. Sign up to get early access and unlock exclusive perks.
          </p>
        </MotionDiv>
        <MotionDiv className="mt-12 max-w-xl mx-auto">
          <Card className="p-6 sm:p-8 border-2 border-primary/20 shadow-xl bg-card rounded-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} className="h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane.doe@example.com" {...field} className="h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-lg font-bold bg-accent hover:bg-accent/90" size="lg">
                  Get Early Access
                </Button>
              </form>
            </Form>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}
