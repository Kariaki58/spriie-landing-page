import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import MotionDiv from '@/components/landing/motion-div';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <MotionDiv>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">Terms of Service</h1>
            <div className="prose lg:prose-xl max-w-none font-body text-foreground/80 space-y-6">
                <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <h2 className="font-headline text-2xl font-bold">1. Agreement to Terms</h2>
                <p>
                    By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>

                <h2 className="font-headline text-2xl font-bold">2. Use of the Service</h2>
                <p>
                    Spriie provides a platform for content-first e-commerce. You agree to use our service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                </p>

                <h2 className="font-headline text-2xl font-bold">3. User Accounts</h2>
                <p>
                    When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
                </p>
                
                <h2 className="font-headline text-2xl font-bold">4. Intellectual Property</h2>
                <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Spriie and its licensors.
                </p>

                <h2 className="font-headline text-2xl font-bold">5. Termination</h2>
                <p>
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>

                <h2 className="font-headline text-2xl font-bold">6. Limitation of Liability</h2>
                <p>
                    In no event shall Spriie, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>

                <h2 className="font-headline text-2xl font-bold">7. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is established, without regard to its conflict of law provisions.
                </p>

                <h2 className="font-headline text-2xl font-bold">8. Changes to These Terms</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
                </p>
            </div>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </div>
  );
}
