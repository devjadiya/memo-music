"use server";

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { analyzeMusicTrends, AnalyzeMusicTrendsOutput } from '@/ai/flows/analyze-music-trends';

// Schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check your input.',
      success: false,
    };
  }

  try {
    // Here you would implement email sending. For now, we just log to console.
    console.log('New contact form submission:');
    console.log('Name:', validatedFields.data.name);
    console.log('Email:', validatedFields.data.email);
    console.log('Message:', validatedFields.data.message);
    console.log('--- This would be sent to memomusicdubai@hotmail.com ---');

    revalidatePath('/');
    return {
      message: 'Thank you! Your message has been received.',
      success: true,
      errors: {},
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'An unexpected error occurred. Please try again.',
      success: false,
      errors: {},
    };
  }
}

const musicAnalysisSchema = z.object({
  artistName: z.string().min(1, { message: 'Artist name is required.' }),
  genre: z.string().min(1, { message: 'Genre is required.' }),
  trackDataUri: z.string().min(1, { message: 'Music file is required.' }),
});

type MusicAnalysisState = {
  result?: AnalyzeMusicTrendsOutput,
  error?: string,
  success: boolean,
}

export async function getMusicAnalysis(prevState: any, formData: FormData): Promise<MusicAnalysisState> {
    const validatedFields = musicAnalysisSchema.safeParse({
      artistName: formData.get('artistName'),
      genre: formData.get('genre'),
      trackDataUri: formData.get('trackDataUri'),
    });

    if (!validatedFields.success) {
      const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors).flat().join(' ');
      return {
        error: errorMessages || 'Invalid input. Please check your fields.',
        success: false,
      };
    }
    
    try {
        const result = await analyzeMusicTrends(validatedFields.data);
        revalidatePath('/');
        return { result, success: true };
    } catch(e: any) {
        console.error(e);
        return {
            error: e.message || "An unexpected error occurred during analysis.",
            success: false,
        }
    }
}
