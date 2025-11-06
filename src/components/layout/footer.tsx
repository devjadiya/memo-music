import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} MEMO MUSIC. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <SocialIcon
            url="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-muted-foreground transition-colors hover:text-primary"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-muted-foreground transition-colors hover:text-primary"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </footer>
  );
}
