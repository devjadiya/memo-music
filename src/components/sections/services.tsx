import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const independentServices = [
  'Studio rental and music production services',
  'Complete song development from concept to commercial release',
  'Professional crews for worldwide music video production',
  'PR support to enhance credibility and exposure',
  'Access to branding specialists and promotional rollout teams',
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            Independent Artist Services
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            World-Class Services, On Your Terms
          </h2>
          <p className="text-lg text-muted-foreground">
            For artists seeking professional support without long-term management commitments, independent artists gain the same premium resources used by international stars.
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
           <div className="order-1 lg:order-2">
             {/* Image removed as per request */}
            </div>
        </div>
      </div>
    </section>
  );
}
