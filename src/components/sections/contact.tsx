"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send, MapPin } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { SocialIcon } from 'react-social-icons';

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
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let’s Make Your Music Dreams Reality
          </h2>
          <p className="text-lg text-muted-foreground">
             Whether you are an aspiring talent or a creative collaborator, connect with MEMO MUSIC to explore how your vision can evolve into global success.
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <form action="https://formsubmit.co/memomusicdubai@hotmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_subject" value="New submission from MEMO MUSIC Website!" />
            <input type="hidden" name="_next" value="https://memomusic-5555.web.app/" />
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

            <div className="mt-16 text-center">
              <h3 className="font-headline text-2xl font-bold text-foreground">Our Location</h3>
              <p className="mt-2 text-muted-foreground">Downtown Dubai, UAE</p>
              <div className="mt-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-secondary hover:bg-secondary/80 hover:text-foreground"
                >
                  <a href="https://www.google.com/maps/search/?api=1&query=Downtown+Dubai" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>


            <div className="mt-12 text-center">
                 <p className="text-sm text-muted-foreground">
                    Your Talent, Our Expertise, Global Success
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <SocialIcon
                    url="https://www.instagram.com/memomusiclabel?igsh=MW5jdmMxa2tja3pxbw=="
                    network="instagram"
                    bgColor="transparent"
                    fgColor="currentColor"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    url="https://youtube.com"
                    network="youtube"
                    bgColor="transparent"
                    fgColor="currentColor"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    style={{ height: 40, width: 40 }}
                  />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
