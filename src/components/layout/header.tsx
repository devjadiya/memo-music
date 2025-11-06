"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#studio', label: 'Studio' },
  { href: '#team', label: 'Team' },
  { href: '#services', label: 'Services' },
  { href: '#ai-analyzer', label: 'AI Analyzer' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        hasScrolled ? 'bg-black/30 border-b border-white/10 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
           <Image
            src="https://blush-fashionable-swift-557.mypinata.cloud/ipfs/bafybeiaqwd37ydrlveo7mpxnx7enf6uwi7u4p2usuuis3adefi3v2ggc7a"
            alt="MEMO MUSIC Logo"
            width={120}
            height={120}
            className="h-14 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95 backdrop-blur-sm p-0">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b border-border p-4">
                        <Link href="/" onClick={closeMobileMenu}>
                            <Image
                                src="https://blush-fashionable-swift-557.mypinata.cloud/ipfs/bafybeiaqwd37ydrlveo7mpxnx7enf6uwi7u4p2usuuis3adefi3v2ggc7a"
                                alt="MEMO MUSIC Logo"
                                width={120}
                                height={120}
                                className="h-14 w-auto"
                            />
                        </Link>
                         <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                    <nav className="flex flex-col gap-4 p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
