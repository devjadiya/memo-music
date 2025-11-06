import Link from 'next/link';
import { Button } from '@/components/ui/button';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect fill="none" height="256" width="256" />
        <circle
            cx="128"
            cy="128"
            fill="none"
            r="40"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
        <rect
            fill="none"
            height="176"
            rx="48"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            width="176"
            x="40"
            y="40"
        />
        <circle cx="180" cy="76" fill="currentColor" r="12" />
    </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect fill="none" height="256" width="256" />
        <path
            d="M224.4,87.7a30.2,30.2,0,0,0-21.4-21.4C185.3,61.5,138,61.5,128,61.5s-57.3,0-75,4.8A30.2,30.2,0,0,0,31.6,87.7,60.6,60.6,0,0,0,26.8,128c0,20.2,4.8,40.3,4.8,40.3A30.2,30.2,0,0,0,53,189.7c17.7,4.8,75,4.8,75,4.8s57.3,0,75-4.8a30.2,30.2,0,0,0,21.4-21.4c4.8-17.7,4.8-40.3,4.8-40.3S229.2,105.3,224.4,87.7Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
        <polygon
            fill="none"
            points="104 99.5 160 128 104 156.5 104 99.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
    </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} MEMO MUSIC. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="YouTube">
              <YoutubeIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
