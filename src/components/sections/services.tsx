import Image from 'next/image';
import { Check } from 'lucide-react';

const independentServices = [
  'Bespoke music production and studio rental services',
  'End-to-end song development from ideation to commercial mastering',
  'Access to elite crews for global music video production',
  'Strategic PR campaigns to amplify credibility and market presence',
  'Consultation with leading branding specialists and promotional strategists',
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            A La Carte Services
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Elite Resources, On Your Terms
          </h2>
          <p className="text-lg text-muted-foreground">
            For independent artists requiring world-class support without long-term commitments, we offer access to the same premium resources that have built international careers.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <ul className="space-y-4">
              {independentServices.map((service) => (
                <li key={service} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 mt-1">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="flex-1 text-lg text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
           <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/images/3.jpg"
                alt="MEMO MUSIC reception area"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint="modern office reception"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
