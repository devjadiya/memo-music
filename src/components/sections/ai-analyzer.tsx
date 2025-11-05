"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { getMusicAnalysis } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Music4, MicVocal, Upload, FileAudio } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const initialState = {
  result: undefined,
  error: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      size="lg"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" /> Analyze My Track
        </>
      )}
    </Button>
  );
}

export default function AiAnalyzerSection() {
  const [state, formAction] = useFormState(getMusicAnalysis, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [trackDataUri, setTrackDataUri] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    if (state.success && state.result) {
      toast({
        title: 'Analysis Complete!',
        description: 'Your track has been successfully analyzed.',
      });
      formRef.current?.reset();
      setTrackDataUri(null);
      setFileName(null);
    } else if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: state.error,
      });
    }
  }, [state, toast]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTrackDataUri(e.target?.result as string);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="ai-analyzer" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            AI Music Analyzer
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get Instant Feedback on Your Music
          </h2>
          <p className="text-lg text-muted-foreground">
            Our groundbreaking AI tool analyzes your track against current market
            trends to provide data-driven insights. Improve your music's artistic and
            commercial potential before its official release.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5 items-start">
          <Card className="lg:col-span-2 w-full bg-background border-primary shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Sparkles className="h-6 w-6 text-accent" />
                Upload Your Track
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="artistName">Artist Name</Label>
                  <Input
                    id="artistName"
                    name="artistName"
                    placeholder="e.g., Your Artist Name"
                    required
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="genre">Genre</Label>
                  <Input
                    id="genre"
                    name="genre"
                    placeholder="e.g., Hip-Hop, Pop, R&B"
                    required
                    className="bg-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="track">Music File</Label>
                   <Button type="button" variant="outline" className="w-full" onClick={() => fileInputRef.current?.click()}>
                    <Upload className="mr-2 h-4 w-4" />
                    {fileName ? 'Change file' : 'Select a music file'}
                  </Button>
                  {fileName && <p className="text-sm text-muted-foreground flex items-center gap-2 pt-2"><FileAudio className="h-4 w-4" /> {fileName}</p>}
                  <Input
                    ref={fileInputRef}
                    id="track"
                    name="track"
                    type="file"
                    accept="audio/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  {trackDataUri && <input type="hidden" name="trackDataUri" value={trackDataUri} />}
                </div>
                 <SubmitButton />
              </form>
            </CardContent>
          </Card>
          
          <div className="lg:col-span-3">
            {state.result ? (
              <div className="space-y-8 animate-in fade-in-50 duration-500">
                  <Alert>
                    <Sparkles className="h-4 w-4 text-accent" />
                    <AlertTitle className="font-headline text-xl">Analysis Complete!</AlertTitle>
                    <AlertDescription>
                      Here are the insights for your track. Use these suggestions to refine your masterpiece.
                    </AlertDescription>
                  </Alert>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                        <Music4 className="h-6 w-6 text-accent" />
                        Trend Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground prose prose-invert prose-sm max-w-none">
                      <p>{state.result.trendAnalysis}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                        <MicVocal className="h-6 w-6 text-accent" />
                        Suggested Improvements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground prose prose-invert prose-sm max-w-none">
                     <p>{state.result.suggestedImprovements}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
               <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-border rounded-xl h-full min-h-[400px]">
                  <div className="p-4 bg-secondary rounded-full">
                    <Sparkles className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-headline">Analysis Results Will Appear Here</h3>
                  <p className="mt-2 text-muted-foreground">Upload your track to get started.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
