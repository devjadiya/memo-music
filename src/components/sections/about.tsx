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
            <p className="text-lg text-muted-foreground">
              MEMO MUSIC stands as a premier music production company founded by Ryan Makhoul, the visionary manager behind some of the most influential Arabic artists in the world. Born and raised in Los Angeles, Ryan has been instrumental in shaping international careers and expanding the reach of Arabic music. His work includes collaborations with acclaimed talents such as Mohamed Ramadan and Balqees Fathi, as well as major names in hip-hop and R&B like Juicy J and Ty Dolla $ign. This portfolio highlights MEMO MUSIC’s versatility and ability to elevate artists across global markets.
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
