'use client';

import type { ContactFormSchema } from '@/schemas/contact-form-schemas';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { showError, showSuccess } from '@/lib/alerts';
import { contactFormSchema } from '@/schemas/contact-form-schemas';
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

type ContactFormProps = {
  propertyId?: string;
  inquiryType?: 'General Inquiry' | 'Specific Property';
};

export default function ContactForm({
  propertyId,
  inquiryType = 'General Inquiry',
}: ContactFormProps) {
  const [loading, setLoading] = useState(false); // State for tracking loading status
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      message: '',
      who_you_are: '',
      property: propertyId || '',
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('https://investly.baliyoventures.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          inquiry_type: inquiryType,
          property: propertyId ? parseInt(propertyId) : null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData.phone_number?.[0] || 'Failed to send the message. Please try again.';
        showError(errorMessage, {
          timer: 3000,
        });
      } else {
        showSuccess('Message sent successfully!', {
          timer: 3000,
        });
        form.reset(); // Clear the form fields
      }
    } catch {
      showError('An error occurred while sending the message.', {
        timer: 3000,
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" className="p-5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" className="p-5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" className="p-5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" className="p-5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="who_you_are"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Who You Are</FormLabel>
                <FormControl>
                  <div className="relative">
                    <select
                      className="p-5 px-5 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                      {...field}
                    >
                      <option value="">Select an option</option>
                      <option value="Mentor">Mentor</option>
                      <option value="Investor">Investor</option>
                      <option value="Startups">Startups</option>
                    </select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell us about yourself or why are you joining</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about yourself or why are you joining"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="py-9">
            <Button
              type="submit"
              className="w-full lg:w-auto py-5 text-base bg-gradient-to-r from-primary/80 to-primary transition-transform hover:scale-105"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Sending...' : 'Send Message →'}{' '}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
