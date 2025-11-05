import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-dvh w-full bg-background">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-accent md:text-7xl lg:text-8xl">
              Turning Talent Into Global Stars
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-200 md:text-xl">
              MEMO MUSIC stands as a premier music production company founded by Ryan Makhoul, the visionary manager behind some of the most influential Arabic artists in the world. His work includes collaborations with acclaimed talents such as Mohamed Ramadan and Balqees Fathi, as well as major names in hip-hop and R&B like Juicy J and Ty Dolla $ign. Today, MEMO MUSIC operates as a powerhouse in artist development and music production, enabling talent to reach their highest potential and achieve international success.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
