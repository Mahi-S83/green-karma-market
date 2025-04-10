
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from "sonner";

const barterFormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  imageUrl: z.string().url({
    message: "Please provide a valid URL for the image.",
  }),
  exchangeFor: z.string().min(5, {
    message: "Please specify what you're looking to exchange for.",
  }),
  location: z.string().min(3, {
    message: "Location is required.",
  }),
  contactInfo: z.string().min(5, {
    message: "Contact information is required.",
  }),
});

type BarterFormValues = z.infer<typeof barterFormSchema>;

const BarterForm = () => {
  // Define form with validation schema
  const form = useForm<BarterFormValues>({
    resolver: zodResolver(barterFormSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      exchangeFor: "",
      location: "",
      contactInfo: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: BarterFormValues) => {
    console.log('Barter item submitted:', data);
    toast.success("Your item has been listed for barter!");
    form.reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>List an Item for Barter</CardTitle>
        <CardDescription>
          Share items you no longer need and find someone looking to exchange.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Bamboo Cutlery Set" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your item, its condition, and any other relevant details." 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="exchangeFor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Looking to Exchange For</FormLabel>
                  <FormControl>
                    <Input placeholder="Plant pots, gardening tools, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="City, State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Information</FormLabel>
                    <FormControl>
                      <Input placeholder="Email or phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full">List Item for Barter</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BarterForm;
