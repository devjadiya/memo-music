"use client";

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { StaggerList, listItemVariants } from '../animations/stagger-list';
import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import { motion } from 'framer-motion';

const studioServices = [
  'Professional Recording',
  'Mixing & Mastering',
  'Songwriting',
  'Vocal Direction',
  'Complete Song Creation',
  'Studio Rental',
];

export default function StudioSection() {
  return (
    <section id="studio" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6">
            <SlideIn direction="down">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold tracking-wider uppercase text-primary">
                Our Studio
              </div>
            </SlideIn>
            <SlideIn direction="down" delay={0.1}>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Engineered for World-Class Sound
              </h2>
            </SlideIn>
            <FadeIn delay={0.3}>
              <p className="text-base text-muted-foreground md:text-lg">
                Our state-of-the-art 400 square meter studio in Downtown Dubai is engineered for world-class sound performance and exceptional comfort. Every detail is optimized to inspire creativity and deliver elite production quality. MEMO MUSIC also offers studio rental for independent artists, including professional recording, mixing, mastering, songwriting, vocal direction, and complete song creation packages. Any artist can produce commercially ready music with access to our experienced production team.
              </p>
            </FadeIn>
             <StaggerList delay={0.5} staggerDuration={0.07} className="grid grid-cols-2 gap-4 text-base text-muted-foreground">
              {studioServices.map((service) => (
                <motion.li key={service} variants={listItemVariants} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </StaggerList>
          </div>
          <SlideIn direction="right">
            <div className="flex items-center justify-center">
              <Image
                  src="/images/5.jpg"
                  alt="Collage of the MEMO MUSIC studio"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint="music studio collage"
                />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
