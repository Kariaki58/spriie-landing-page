import MotionWrapper from '@/components/landing/motion-wrapper';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/how-it-works';
import TrustSection from '@/components/landing/trust-section';
import MultiSeller from '@/components/landing/multi-seller';
import WaitlistForm from '@/components/landing/waitlist-form';
import Newsletter from '@/components/landing/newsletter';
import SocialProof from '@/components/landing/social-proof';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MotionWrapper>
          <HowItWorks />
        </MotionWrapper>
        <MotionWrapper>
          <TrustSection />
        </MotionWrapper>
        <MotionWrapper>
          <MultiSeller />
        </MotionWrapper>
        <MotionWrapper>
          <SocialProof />
        </MotionWrapper>
        <MotionWrapper id="waitlist">
          <WaitlistForm />
        </MotionWrapper>
        <MotionWrapper>
          <Newsletter />
        </MotionWrapper>
      </main>
      <Footer />
    </div>
  );
}
