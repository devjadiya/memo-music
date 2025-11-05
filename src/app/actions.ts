"use server";

import { z } from 'zod';
import {
  analyzeMusicTrends,
  AnalyzeMusicTrendsOutput,
} from '@/ai/flows/analyze-music-trends';
import { revalidatePath } from 'next/cache';

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

// Schema for AI analyzer form
const aiAnalyzerSchema = z.object({
  trackDataUri: z
    .string({ required_error: 'Please upload a music file.' })
    .startsWith('data:audio/', { message: 'Invalid file format.' }),
  genre: z
    .string()
    .min(2, { message: 'Genre must be at least 2 characters.' }),
  artistName: z
    .string()
    .min(2, { message: 'Artist name must be at least 2 characters.' }),
});

type AIAnalyzerState = {
  result?: AnalyzeMusicTrendsOutput;
  error?: string;
  success: boolean;
};

export async function getMusicAnalysis(
  prevState: AIAnalyzerState,
  formData: FormData
): Promise<AIAnalyzerState> {
  const validatedFields = aiAnalyzerSchema.safeParse({
    trackDataUri: formData.get('trackDataUri'),
    genre: formData.get('genre'),
    artistName: formData.get('artistName'),
  });

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors).flat().join(' ');
    return {
      error: errorMessages || 'Invalid input. Please check the form.',
      success: false,
    };
  }

  try {
    const result = await analyzeMusicTrends(validatedFields.data);
    return { result, success: true };
  } catch (e) {
    console.error(e);
    return {
      error: 'An unexpected error occurred while analyzing the track. Please try again.',
      success: false,
    };
  }
}
