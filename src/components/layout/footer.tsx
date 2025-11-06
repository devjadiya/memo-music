"use client";

import Link from 'next/link';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { Separator } from '@/components/ui/separator';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#studio', label: 'Studio' },
  { href: '#team', label: 'Team' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="MEMO MUSIC Logo"
                width={120}
                height={120}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Engineering Stardom. Defining Legacies.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-foreground tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
             <h3 className="font-semibold text-foreground tracking-wider mb-4">Contact Us</h3>
             <div className="space-y-3 text-sm text-muted-foreground">
                <p>Downtown Dubai, UAE</p>
                <p>
                  <Link href="mailto:info@memomusic.com" className="hover:text-primary transition-colors">
                    info@memomusic.com
                  </Link>
                </p>
             </div>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground tracking-wider mb-4">Follow Us</h3>
            <div className="flex items-center gap-x-2">
               <SocialIcon
                  url="https://instagram.com"
                  network="instagram"
                  bgColor="transparent"
                  fgColor="currentColor"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  style={{ height: 48, width: 48 }}
                />
                <SocialIcon
                  url="https://youtube.com"
                  network="youtube"
                  bgColor="transparent"
                  fgColor="currentColor"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  style={{ height: 48, width: 48 }}
                />
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/20" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} MEMO MUSIC. All rights reserved.</p>
          <p>
            Developed by{' '}
            <Link href="https://www.linkedin.com/in/dev-jadiya/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
              Dev Jadiya
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
