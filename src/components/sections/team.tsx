import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Music, Video, Clapperboard, Mic, Newspaper, Palette, Bot } from 'lucide-react';

const teamCapabilities = [
  { icon: Music, text: 'Song production & arrangement' },
  { icon: Palette, text: 'Artist presence & branding' },
  { icon: Users, text: 'Social media management' },
  { icon: Newspaper, text: 'Press, media & magazine placements' },
  { icon: Clapperboard, text: 'Global music video production' },
  { icon: Bot, text: 'AI-powered trend analysis' },
];

const teamMembers = [
  {
    id: 'team-member-1',
    name: 'Alexandre Dubois',
    role: 'Head of A&R',
    description: "Discovering and nurturing the next generation of global superstars."
  },
  {
    id: 'team-member-2',
    name: 'Isabella Rossi',
    role: 'Lead Producer',
    description: "Crafting chart-topping hits with a signature sound."
  },
  {
    id: 'team-member-3',
    name: 'Chen Wei',
    role: 'Creative Director',
    description: "Building iconic visual identities that captivate audiences."
  },
];


export default function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
           <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Our Team
            </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Powerhouse Behind the Stars
          </h2>
          <p className="text-lg text-muted-foreground">
            A dedicated team of 50 industry professionals works collaboratively
            to prepare artists for long-term success, shaping careers while the
            artist focuses solely on creativity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamCapabilities.map((capability, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                 <capability.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{capability.text}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find((p) => p.id === member.id);
            return (
              <Card key={member.name} className="text-center bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="p-6">
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="mx-auto mb-4 rounded-full"
                      data-ai-hint={memberImage.imageHint}
                    />
                  )}
                  <CardTitle className="text-xl font-bold font-headline">{member.name}</CardTitle>
                  <CardDescription className="text-accent">{member.role}</CardDescription>
                  <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
