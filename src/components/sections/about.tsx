import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Our Ethos
            </div>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A Legacy of Musical Innovation
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded on a passion for transformative artistry, MEMO MUSIC has
              forged a reputation as a trusted leader in artist development and
              promotion. Our mission is to provide comprehensive, 360-degree
              support, empowering artists to focus exclusively on their craft.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md border-accent border-l-4 bg-card shadow-lg">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent" />
                <blockquote className="mt-4 text-2xl font-medium text-foreground">
                  We orchestrate the industry, so you can command the stage.
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
