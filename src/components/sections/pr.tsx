import { Award, Megaphone, Star, Handshake, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const prServices = [
  { icon: Megaphone, title: 'Publicity Campaigns & Reputation Building', description: 'Strategic campaigns to build reputation and audience impact.' },
  { icon: Award, title: 'Magazine & Media Features', description: 'Securing high-profile press coverage and interviews.' },
  { icon: Star, title: 'Influencer & Celebrity Networking', description: 'Building networks that amplify your reach and credibility.' },
  { icon: Handshake, title: 'Brand Partnerships & Sponsorships', description: 'Creating sponsorship opportunities with global brands.' },
  { icon: TrendingUp, title: 'Audience Growth Strategies', description: 'Fanbase engagement strategies designed for rapid growth.' },
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
              Public Relations and Fame Development
            </div>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Building Your Global Fame
            </h2>
            <p className="text-lg text-muted-foreground">
              MEMO MUSIC specializes in elevating visibility and building influential public images designed for strong audience impact. Our PR division drives strategic exposure to make you famous on a global scale.
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
