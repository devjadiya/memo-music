"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-12 sm:py-24 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
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
