import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import MotionDiv from '@/components/landing/motion-div';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-20 lg:py-24 text-center bg-card">
            <MotionDiv>
                <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Get In Touch</h1>
                <p className="mt-4 max-w-3xl mx-auto font-body text-lg md:text-xl text-foreground/80">
                    We’d love to hear from you. Whether you have a question, feedback, or just want to say hello.
                </p>
            </MotionDiv>
        </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <MotionDiv>
                        <h2 className="font-headline text-3xl font-bold mb-6">Contact Us</h2>
                         <Card className="p-8 border-2 border-primary/20 shadow-xl bg-card rounded-xl">
                            <form className="space-y-6">
                                <Input placeholder="Your Name" className="h-12"/>
                                <Input type="email" placeholder="Your Email" className="h-12"/>
                                <Input placeholder="Subject" className="h-12"/>
                                <Textarea placeholder="Your Message" rows={5}/>
                                <Button type="submit" className="w-full h-12 text-lg font-bold bg-accent hover:bg-accent/90" size="lg">
                                    Send Message
                                </Button>
                            </form>
                         </Card>
                    </MotionDiv>
                    <MotionDiv className="space-y-8">
                         <h2 className="font-headline text-3xl font-bold mb-6">Our Information</h2>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full"><Mail className="w-6 h-6 text-primary" /></div>
                            <div>
                                <h3 className="font-headline font-semibold text-lg">Email</h3>
                                <p className="text-foreground/70 font-body">hello@spriie.com</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full"><Phone className="w-6 h-6 text-primary" /></div>
                            <div>
                                <h3 className="font-headline font-semibold text-lg">Phone</h3>
                                <p className="text-foreground/70 font-body">(123) 456-7890</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full"><MapPin className="w-6 h-6 text-primary" /></div>
                            <div>
                                <h3 className="font-headline font-semibold text-lg">Office</h3>
                                <p className="text-foreground/70 font-body">123 Truth St, Commerce City, 12345</p>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
