import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const studioServices = [
  'Precision Audio Recording',
  'Advanced Mixing & Mastering',
  'Executive Songwriting & Composition',
  'Elite Vocal Coaching & Direction',
  'Full-Service Song Creation',
  'Exclusive Studio Rental',
];

export default function StudioSection() {
  return (
    <section id="studio" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold tracking-wider uppercase text-primary">
              Our Facility
            </div>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Engineered for Sonic Perfection
            </h2>
            <p className="text-lg text-muted-foreground">
              Our state-of-the-art 400sqm studio in Downtown Dubai is a sanctuary of sound, meticulously engineered for world-class performance and creative comfort. We provide an environment where artistry thrives, supported by elite production technology. For independent artists, we offer exclusive rental access to our facilities and seasoned production team, ensuring every track meets commercial release standards.
            </p>
             <ul className="grid grid-cols-2 gap-4 text-base text-muted-foreground">
              {studioServices.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
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
        </div>
      </div>
    </section>
  );
}
