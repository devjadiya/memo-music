"use client";

import { Users, Music, Clapperboard, Mic, Newspaper, Palette } from 'lucide-react';
import Image from 'next/image';
import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import { StaggerList, listItemVariants } from '../animations/stagger-list';
import { motion } from 'framer-motion';

const teamCapabilities = [
  { icon: Music, text: 'Song production including beat creation, writing, recording, and arrangement.' },
  { icon: Palette, text: 'Artist presence development and personal branding.' },
  { icon: Mic, text: 'Styling, fashion direction, and visual identity.' },
  { icon: Users, text: 'Social media management and promotional campaigns.' },
  { icon: Newspaper, text: 'Press and media management.' },
  { icon: Clapperboard, text: 'Global music video production and creative direction.' },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SlideIn direction="down">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                Our Team
              </div>
          </SlideIn>
          <SlideIn direction="down" delay={0.1}>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Powerhouse Behind the Stars
            </h2>
          </SlideIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-muted-foreground">
              A dedicated team of 50 industry professionals works collaboratively to prepare artists for long-term success. Every expert at MEMO MUSIC works for the artist’s success, shaping careers and public perception while the artist focuses solely on creativity and performance.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
            <SlideIn direction="left">
              <StaggerList delay={0.4} staggerDuration={0.1} className="space-y-6">
                  {teamCapabilities.map((capability, index) => (
                      <motion.li key={index} variants={listItemVariants} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <capability.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                          <p className="text-lg font-medium text-foreground">{capability.text}</p>
                      </div>
                      </motion.li>
                  ))}
              </StaggerList>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="flex items-center justify-center">
                  <Image
                      src="/images/1.jpg"
                      alt="MEMO MUSIC team member in the studio"
                      width={500}
                      height={750}
                      className="rounded-lg shadow-2xl"
                      data-ai-hint="man music studio"
                  />
              </div>
            </SlideIn>
        </div>
      </div>
    </section>
  );
}
