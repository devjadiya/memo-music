import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              About MEMO MUSIC
            </div>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A Legacy of Musical Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Established with a passion for artistry and growth, MEMO MUSIC has
              become a trusted leader in developing and promoting artists. Our
              mission is to provide fully comprehensive support, allowing
              artists to remain focused on crafting exceptional music.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md border-accent border-l-4 bg-card shadow-lg">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent" />
                <blockquote className="mt-4 text-2xl font-medium text-foreground">
                  We handle the business, you enjoy the spotlight.
                </blockquote>
                <p className="mt-4 text-muted-foreground">— Our Philosophy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
