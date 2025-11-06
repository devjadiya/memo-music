"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SlideIn direction="down">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Let’s Make Your Music Dreams Reality
            </h2>
          </SlideIn>
          <FadeIn delay={0.2}>
            <p className="text-base text-muted-foreground md:text-lg">
              Whether you are an aspiring talent or a creative collaborator, connect with MEMO MUSIC to explore how your vision can evolve into global success.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-16 max-w-2xl mx-auto">
          <form action="https://formsubmit.co/itsdevjadiya@gmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_subject" value="New submission from MEMO MUSIC Website!" />
            <input type="hidden" name="_next" value="https://memomusic.vercel.app/" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required className="bg-input"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-input"/>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or your goals..."
                rows={5}
                required
                className="bg-input"
              />
            </div>
            <SubmitButton />
          </form>

            <FadeIn className="mt-16 text-center" delay={0.2}>
              <h3 className="font-headline text-2xl font-bold text-foreground">Our Location</h3>
              <p className="mt-2 text-muted-foreground">Downtown Dubai, UAE</p>
              <div className="mt-4 rounded-lg overflow-hidden border border-border/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.078441604033!2d55.27802644999999!3d25.19412875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682f700cf983%3A0xb5cc58b076c0b904!2sDowntown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sru!4v1762415339202!5m2!1sen!2sru" 
                  width="100%" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
}
