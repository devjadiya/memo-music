import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Megaphone, Star, Handshake, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const prServices = [
  { icon: Megaphone, title: 'Publicity Campaigns', description: 'Strategic campaigns to build reputation and audience impact.' },
  { icon: Award, title: 'Magazine & Media Features', description: 'Securing high-profile press coverage and interviews.' },
  { icon: Star, title: 'Influencer & Celebrity Relations', description: 'Building networks that amplify your reach and credibility.' },
  { icon: Handshake, title: 'Brand Partnerships', description: 'Creating sponsorship opportunities with global brands.' },
  { icon: TrendingUp, title: 'Audience Growth', description: 'Fanbase engagement strategies designed for rapid growth.' },
];

export default function PRSection() {
  const prImage = PlaceHolderImages.find((p) => p.id === 'pr-image');

  return (
    <section id="pr" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 flex items-center justify-center">
             {prImage && (
              <Card className="overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={prImage.imageUrl}
                    alt={prImage.description}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={prImage.imageHint}
                  />
              </Card>
            )}
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Public Relations
            </div>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Building Your Global Fame
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in elevating visibility and building influential public images. Our PR division drives strategic exposure to make you famous on a global scale.
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
