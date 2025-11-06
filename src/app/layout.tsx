import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'MEMO MUSIC | Turning Talent Into Global Stars',
  description:
    'MEMO MUSIC is a premier music production company enabling talent to reach their highest potential and achieve international success.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>
      <body 
        className={cn(
          "font-body antialiased",
          ptSans.variable,
          playfairDisplay.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
