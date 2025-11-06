"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';

function SubmitButton() {
  const [pending, setPending] = useState(false);

  const handleClick = () => {
    setPending(true);
  }

  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleClick}>
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
            Define Your Legacy
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with us to explore how your vision can be transformed into a global phenomenon. We welcome inquiries from aspiring talents and creative collaborators.
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <form action="https://formsubmit.co/devjadiya15@gmail.com" method="POST" className="space-y-6">
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

            <div className="mt-8 text-center">
                 <p className="text-sm text-muted-foreground">
                    All submissions are directed to our talent acquisition team for review.
                </p>
                <div className="mt-4 flex justify-center gap-4">
                    <SocialIcon
                        url="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        bgColor="transparent"
                        fgColor="currentColor"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        style={{ height: 40, width: 40 }}
                    />
                    <SocialIcon
                        url="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
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
