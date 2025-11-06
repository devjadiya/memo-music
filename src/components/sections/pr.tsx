"use client";

import { Award, Megaphone, Star, Handshake, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import { StaggerList, listItemVariants } from '../animations/stagger-list';

const prServices = [
  { icon: Megaphone, title: 'Magazine and media features', description: 'High-profile press coverage and interviews.' },
  { icon: Award, title: 'Publicity campaigns and reputation building', description: 'Securing features in high-profile international publications.' },
  { icon: Star, title: 'Influencer relations and celebrity networking', description: 'Forging networks that amplify influence and credibility.' },
  { icon: Handshake, title: 'Brand partnerships and sponsorship opportunities', description: 'Architecting lucrative sponsorship deals with global brands.' },
  { icon: TrendingUp, title: 'Audience engagement strategies', description: 'Executing data-driven strategies designed to grow fanbases rapidly.' },
];

export default function PRSection() {
  return (
    <section id="pr" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <SlideIn direction="left">
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <Image
                  src="/images/4.jpg"
                  alt="Brand partnership handshake at MEMO MUSIC"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint="business handshake office"
                />
              </div>
            </SlideIn>
          <div className="order-1 lg:order-2 space-y-6 lg:col-span-1">
            <SlideIn direction="down">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold tracking-wider uppercase text-primary">
                Public Relations and Fame Development
              </div>
            </SlideIn>
            <SlideIn direction="down" delay={0.1}>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Making the Artist Famous on a Global Scale
              </h2>
            </SlideIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-muted-foreground">
                MEMO MUSIC specializes in elevating visibility and building influential public images designed for strong audience impact. Our PR division drives strategic exposure.
              </p>
            </FadeIn>
            <StaggerList delay={0.4} staggerDuration={0.1} className="space-y-4">
              {prServices.map((service, index) => (
                <motion.div key={index} variants={listItemVariants} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/50">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerList>
          </div>
        </div>
      </div>
    </section>
  );
}
