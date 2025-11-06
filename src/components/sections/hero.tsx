import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-dvh w-full overflow-hidden bg-background">
       <Image
        src="/images/2.jpg"
        alt="MEMO MUSIC Studio Control Room"
        fill
        className="object-cover animate-[hero-pan-zoom_20s_ease-in-out_infinite_alternate]"
        priority
        data-ai-hint="music studio control room"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
              Engineering Stardom. Defining Legacies.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-200 md:text-xl">
             From raw talent to global icon, MEMO MUSIC is the force that transforms musical careers. We don't just produce tracks; we build legacies.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Begin Your Ascent</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
