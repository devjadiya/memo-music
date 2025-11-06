"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import Link from 'next/link';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect fill="none" height="256" width="256" />
        <circle
            cx="128"
            cy="128"
            fill="none"
            r="40"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
        <rect
            fill="none"
            height="176"
            rx="48"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            width="176"
            x="40"
            y="40"
        />
        <circle cx="180" cy="76" fill="currentColor" r="12" />
    </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect fill="none" height="256" width="256" />
        <path
            d="M224.4,87.7a30.2,30.2,0,0,0-21.4-21.4C185.3,61.5,138,61.5,128,61.5s-57.3,0-75,4.8A30.2,30.2,0,0,0,31.6,87.7,60.6,60.6,0,0,0,26.8,128c0,20.2,4.8,40.3,4.8,40.3A30.2,30.2,0,0,0,53,189.7c17.7,4.8,75,4.8,75,4.8s57.3,0,75-4.8a30.2,30.2,0,0,0,21.4-21.4c4.8-17.7,4.8-40.3,4.8-40.3S229.2,105.3,224.4,87.7Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
        <polygon
            fill="none"
            points="104 99.5 160 128 104 156.5 104 99.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
    </svg>
);


const initialState = {
  message: '',
  errors: {},
  success: false,
};

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
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && !state.success && Object.keys(state.errors).length > 0) {
      // Concatenate all error messages
      const errorMessages = Object.values(state.errors).flat().join(' ');
      toast({
        variant: 'destructive',
        title: 'Oops! Something went wrong.',
        description: errorMessages || 'Please check your input and try again.',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="font-headline text-lg font-bold tracking-tight text-accent">
            Your Talent. Our Expertise. Global Success.
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Define Your Legacy
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with us to explore how your vision can be transformed into a global phenomenon. We welcome inquiries from aspiring talents and creative collaborators.
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required className="bg-input"/>
                 {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-input"/>
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
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
              {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>

            <div className="mt-8 text-center">
                 <p className="text-sm text-muted-foreground">
                    All submissions are directed to our talent acquisition team for review.
                </p>
                <div className="mt-4 flex justify-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <InstagramIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <YoutubeIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
