import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
                <Image src="/sprii-logo-dark.png" alt="Spriie Logo" width={120} height={40} />
            </Link>
            <p className="font-body text-sm text-foreground/70">Buy with Trust, not just ads.</p>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Platform</h4>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li><Link href="/#how-it-works" className="text-foreground/80 hover:text-primary">How It Works</Link></li>
              <li><Link href="/#trust" className="text-foreground/80 hover:text-primary">Trust</Link></li>
              <li><Link href="/#sellers" className="text-foreground/80 hover:text-primary">For Sellers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li><Link href="/about" className="text-foreground/80 hover:text-primary">About Us</Link></li>
              <li><Link href="/#waitlist" className="text-foreground/80 hover:text-primary">Join Waitlist</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Connect</h4>
            <div className="flex items-center space-x-4 mt-4">
              <Link href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary"><Linkedin /></Link>
              <Link href="#" aria-label="Twitter" className="text-foreground/70 hover:text-primary"><Twitter /></Link>
              <Link href="#" aria-label="YouTube" className="text-foreground/70 hover:text-primary"><Youtube /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60 font-body">
          <p>&copy; {new Date().getFullYear()} Spriie. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
