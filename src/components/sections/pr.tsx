import { Award, Megaphone, Star, Handshake, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const prServices = [
  { icon: Megaphone, title: 'Strategic Publicity & Reputation Management', description: 'Crafting resonant narratives that build cultural impact.' },
  { icon: Award, title: 'Elite Media & Editorial Placement', description: 'Securing features in high-profile international publications.' },
  { icon: Star, title: 'Global Influencer & Celebrity Alliances', description: 'Forging networks that amplify influence and credibility.' },
  { icon: Handshake, title: 'High-Value Brand Partnerships', description: 'Architecting lucrative sponsorship deals with global brands.' },
  { icon: TrendingUp, title: 'Accelerated Audience Growth', description: 'Executing data-driven strategies for exponential fanbase expansion.' },
];

export default function PRSection() {
  return (
    <section id="pr" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
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
          <div className="order-1 lg:order-2 space-y-6 lg:col-span-1">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Public Relations & Fame Architecture
            </div>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Architecting Global Influence
            </h2>
            <p className="text-lg text-muted-foreground">
              MEMO MUSIC excels in elevating artist profiles into influential public figures. Our PR division engineers strategic exposure to catalyze global recognition and construct enduring legacies.
            </p>
            <div className="space-y-4">
              {prServices.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
