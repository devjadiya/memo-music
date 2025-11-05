import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const studioServices = [
  'Professional Recording',
  'Mixing & Mastering',
  'Songwriting & Arrangement',
  'Vocal Direction',
  'Complete Song Creation',
  'Studio Rental',
];

export default function StudioSection() {
  const studioImage = PlaceHolderImages.find((p) => p.id === 'studio-image');

  return (
    <section id="studio" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Our Studio
            </div>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Engineered for Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Our state-of-the-art 400 square meter studio in Downtown Dubai is
              engineered for world-class sound performance and exceptional
              comfort. Every detail is optimized to inspire creativity and
              deliver elite production quality.
            </p>
             <ul className="grid grid-cols-2 gap-4 text-base text-muted-foreground">
              {studioServices.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
             {studioImage && (
              <Card className="overflow-hidden rounded-xl shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={studioImage.imageUrl}
                    alt={studioImage.description}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={studioImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
