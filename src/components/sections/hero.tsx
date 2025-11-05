import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-dvh w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-accent md:text-7xl lg:text-8xl">
              Turning Talent Into Global Stars
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-200 md:text-xl">
              MEMO MUSIC is a premier music production company founded by Ryan
              Makhoul. We are a powerhouse in artist development and music
              production, enabling talent to reach their highest potential and
              achieve international success.
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
