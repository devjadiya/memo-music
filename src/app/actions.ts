"use server";

import { z } from 'zod';
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
