import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import MotionDiv from '@/components/landing/motion-div';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <MotionDiv>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
            <div className="prose lg:prose-xl max-w-none font-body text-foreground/80 space-y-6">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <h2 className="font-headline text-2xl font-bold">Introduction</h2>
              <p>
                Welcome to Spriie. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2 className="font-headline text-2xl font-bold">Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, and other details you provide when you join our waitlist or subscribe to our newsletter. We also collect non-personal information, such as browser type, operating system, and website usage data through cookies and other tracking technologies.
              </p>

              <h2 className="font-headline text-2xl font-bold">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our website.</li>
                <li>Improve, personalize, and expand our website.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>Communicate with you, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                <li>Process your transactions.</li>
                <li>Find and prevent fraud.</li>
              </ul>

              <h2 className="font-headline text-2xl font-bold">Sharing Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>

              <h2 className="font-headline text-2xl font-bold">Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2 className="font-headline text-2xl font-bold">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </div>
  );
}
