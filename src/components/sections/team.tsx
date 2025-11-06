import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Music, Clapperboard, Mic, Newspaper, Palette } from 'lucide-react';
import Image from 'next/image';

const teamCapabilities = [
  { icon: Music, text: 'Full-spectrum song production, from beat creation to final arrangement.' },
  { icon: Palette, text: 'Personal brand cultivation and artist presence development.' },
  { icon: Mic, text: 'Visual identity curation, including styling and fashion direction.' },
  { icon: Users, text: 'Digital strategy, social media management, and promotional campaigns.' },
  { icon: Newspaper, text: 'Global press management and high-impact media placements.' },
  { icon: Clapperboard, text: 'Worldwide music video production and creative direction.' },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
           <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Our Experts
            </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Powerhouse Behind the Stars
          </h2>
          <p className="text-lg text-muted-foreground">
            Our dedicated team of 50 industry professionals operates in synergy to architect enduring careers. Each specialist at MEMO MUSIC is committed to sculpting an artist's public trajectory, allowing them to concentrate solely on performance and creativity.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
            <div>
                 <ul className="space-y-6">
                    {teamCapabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <capability.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                            <p className="text-lg font-medium text-foreground">{capability.text}</p>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
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
        </div>
      </div>
    </section>
  );
}
