import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import MotionDiv from '@/components/landing/motion-div';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Handshake } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AiImage from '@/components/ai-image';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Founder & CEO', avatar: 'AJ', imageHint: 'ceo portrait' },
  { name: 'Maria Garcia', role: 'Head of Product', avatar: 'MG', imageHint: 'product manager' },
  { name: 'Sam Lee', role: 'Lead Engineer', avatar: 'SL', imageHint: 'software engineer' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-20 lg:py-32 text-center bg-card">
            <MotionDiv>
                <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">About Spriie</h1>
                <p className="mt-4 max-w-3xl mx-auto font-body text-lg md:text-xl text-foreground/80">
                    We're on a mission to bring truth and transparency back to e-commerce.
                </p>
            </MotionDiv>
        </section>

        <section className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <MotionDiv>
                        <AiImage 
                            prompt="team collaboration"
                            alt="Our Team"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />
                    </MotionDiv>
                    <MotionDiv>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Story</h2>
                        <p className="mt-4 font-body text-lg text-foreground/70">
                            Spriie was born from a simple idea: what if you could shop based on real experiences, not just clever marketing? Frustrated by endless ads and biased reviews, we set out to build a platform where authentic content creates a trustworthy shopping experience for everyone.
                        </p>
                        <p className="mt-4 font-body text-lg text-foreground/70">
                            We believe that by empowering creators and verifying sellers, we can build a more honest and connected marketplace.
                        </p>
                    </MotionDiv>
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4">
                <MotionDiv className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
                    <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-foreground/70">
                        The principles that guide every decision we make.
                    </p>
                </MotionDiv>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit"><Target className="w-10 h-10 text-primary" /></div>
                            <CardTitle className="font-headline text-xl font-bold mt-4">Truth</CardTitle>
                        </CardHeader>
                        <CardContent><p className="font-body text-foreground/80">We prioritize authentic content and verifiable information above all else.</p></CardContent>
                    </Card>
                     <Card className="text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit"><Users className="w-10 h-10 text-primary" /></div>
                            <CardTitle className="font-headline text-xl font-bold mt-4">Community</CardTitle>
                        </CardHeader>
                        <CardContent><p className="font-body text-foreground/80">We foster a supportive ecosystem for shoppers, creators, and sellers.</p></CardContent>
                    </Card>
                     <Card className="text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit"><Handshake className="w-10 h-10 text-primary" /></div>
                            <CardTitle className="font-headline text-xl font-bold mt-4">Trust</CardTitle>
                        </CardHeader>
                        <CardContent><p className="font-body text-foreground/80">We build tools and processes that create a transparent and reliable platform.</p></CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <MotionDiv className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Meet the Team</h2>
            </MotionDiv>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <MotionDiv key={member.name}>
                  <Card className="text-center p-6">
                    <Avatar className="w-24 h-24 mb-4 mx-auto border-4 border-primary/20">
                      <AiImage
                        prompt={member.imageHint}
                        alt={member.name}
                        width={100}
                        height={100}
                        isAvatar={true}
                       />
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                    <p className="font-body text-primary">{member.role}</p>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
