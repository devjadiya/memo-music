"use client";

import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-4">
            <SlideIn direction="down">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold tracking-wider uppercase text-primary">
                About MEMO MUSIC
              </div>
            </SlideIn>
            <SlideIn direction="down" delay={0.1}>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Turning Talent Into Global Stars
              </h2>
            </SlideIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-muted-foreground">
                MEMO MUSIC stands as a premier music production company founded by Ryan Makhoul, the visionary manager behind some of the most influential Arabic artists in the world. Born and raised in Los Angeles, Ryan has been instrumental in shaping international careers and expanding the reach of Arabic music.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-lg text-muted-foreground">
               His work includes collaborations with acclaimed talents such as Mohamed Ramadan and Balqees Fathi, as well as major names in hip-hop and R&B like Juicy J and Ty Dolla $ign. This portfolio highlights MEMO MUSIC’s versatility and ability to elevate artists across global markets. Today, MEMO MUSIC operates as a powerhouse in artist development and music production, enabling talent to reach their highest potential and achieve international success.
              </p>
            </FadeIn>
          </div>
          <SlideIn direction="left">
            <div className="flex flex-col items-center justify-center gap-8">
              <Image
                src="/images/1.jpg"
                alt="Ryan Makhoul, founder of MEMO MUSIC"
                width={400}
                height={400}
                className="rounded-full shadow-2xl aspect-square object-cover"
                data-ai-hint="man portrait studio"
              />
              <Card className="w-full max-w-md border-primary/50 border-l-4 bg-secondary shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary" />
                  <blockquote className="mt-4 text-2xl font-medium text-foreground">
                    We handle the business, you enjoy the spotlight.
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
