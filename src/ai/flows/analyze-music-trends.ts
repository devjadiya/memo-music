'use server';

/**
 * @fileOverview Analyzes music trends for a given track to provide insights for improvement.
 *
 * - analyzeMusicTrends - Analyzes the potential performance of a music track based on current trends.
 * - AnalyzeMusicTrendsInput - The input type for the analyzeMusicTrends function.
 * - AnalyzeMusicTrendsOutput - The return type for the analyzeMusicTrends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeMusicTrendsInputSchema = z.object({
  trackDataUri: z
    .string()
    .describe(
      'A music track file as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
  genre: z.string().describe('The genre of the music track.'),
  artistName: z.string().describe('The name of the artist.'),
});
export type AnalyzeMusicTrendsInput = z.infer<typeof AnalyzeMusicTrendsInputSchema>;

const AnalyzeMusicTrendsOutputSchema = z.object({
  trendAnalysis: z.string().describe('An analysis of the track\'s potential performance based on current music trends.'),
  suggestedImprovements: z.string().describe('Suggested improvements to enhance the track\'s artistic and commercial viability.'),
});
export type AnalyzeMusicTrendsOutput = z.infer<typeof AnalyzeMusicTrendsOutputSchema>;

export async function analyzeMusicTrends(input: AnalyzeMusicTrendsInput): Promise<AnalyzeMusicTrendsOutput> {
  return analyzeMusicTrendsFlow(input);
}

const analyzeMusicTrendsPrompt = ai.definePrompt({
  name: 'analyzeMusicTrendsPrompt',
  input: {schema: AnalyzeMusicTrendsInputSchema},
  output: {schema: AnalyzeMusicTrendsOutputSchema},
  prompt: `You are an AI music analyst providing insights to independent artists.

You will analyze the provided music track data in the context of current music trends and provide actionable feedback to the artist. You will provide an analysis of the track\'s potential performance based on current music trends, and you will provide suggestions to improve the track\'s artistic and commercial viability.

Track Genre: {{{genre}}}
Artist Name: {{{artistName}}}
Track Data: {{media url=trackDataUri}}

Analyze the track and provide actionable suggestions for improvement in the categories of musical arrangement, lyrical content, and overall commercial appeal.`,
});

const analyzeMusicTrendsFlow = ai.defineFlow(
  {
    name: 'analyzeMusicTrendsFlow',
    inputSchema: AnalyzeMusicTrendsInputSchema,
    outputSchema: AnalyzeMusicTrendsOutputSchema,
  },
  async input => {
    const {output} = await analyzeMusicTrendsPrompt(input);
    return output!;
  }
);
