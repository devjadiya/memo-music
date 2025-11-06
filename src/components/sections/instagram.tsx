"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-24 sm:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SlideIn direction="down">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Follow Our Journey
            </h2>
          </SlideIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-muted-foreground md:text-lg">
              Stay up to date with our latest projects, artist spotlights, and behind-the-scenes content on Instagram.
            </p>
          </FadeIn>
        </div>

        <FadeIn className="mt-16" delay={0.4}>
          <Link href="https://www.instagram.com/memomusiclabel" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <Image
              src="/images/insta_m.png"
              alt="Follow MEMO MUSIC on Instagram"
              width={1080}
              height={1080}
              className="block md:hidden rounded-lg shadow-lg mx-auto"
              loading="lazy"
            />
            <Image
              src="/images/insta_d.png"
              alt="Follow MEMO MUSIC on Instagram"
              width={1920}
              height={1080}
              className="hidden md:block rounded-lg shadow-lg mx-auto"
              loading="lazy"
            />
             <span className="sr-only">Follow MEMO MUSIC on Instagram</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
