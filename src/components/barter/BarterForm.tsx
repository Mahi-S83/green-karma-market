
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
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from "sonner";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

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
  condition: z.enum(["new", "like-new", "good", "fair", "worn"]).optional(),
  category: z.string().optional(),
  availableForExchange: z.boolean().default(true),
  availableForDonation: z.boolean().default(false),
  availableForLoan: z.boolean().default(false),
  estimatedValue: z.string().optional(),
  duration: z.string().optional(),
  preferredExchangeLocation: z.string().optional(),
  tags: z.string().optional(),
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
      condition: "good",
      category: "",
      availableForExchange: true,
      availableForDonation: false,
      availableForLoan: false,
      estimatedValue: "",
      duration: "",
      preferredExchangeLocation: "",
      tags: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: BarterFormValues) => {
    // Convert checkboxes to array for availableFor
    const availableFor = [];
    if (data.availableForExchange) availableFor.push("exchange");
    if (data.availableForDonation) availableFor.push("donation");
    if (data.availableForLoan) availableFor.push("loan");

    // Convert estimatedValue to number
    const estimatedValue = data.estimatedValue ? parseInt(data.estimatedValue) : undefined;
    
    // Convert duration to number
    const duration = data.duration ? parseInt(data.duration) : undefined;
    
    // Convert tags string to array
    const tags = data.tags ? data.tags.split(',').map(tag => tag.trim()) : undefined;

    console.log('Barter item submitted:', {
      ...data,
      availableFor,
      estimatedValue,
      duration,
      tags,
    });
    
    toast.success("Your item has been listed for barter!");
    form.reset();
  };

  return (
    <Card className="border-forest-200">
      <CardContent className="p-6">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select 
                      value={field.value} 
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="kitchen">Kitchen & Dining</SelectItem>
                        <SelectItem value="home">Home & Living</SelectItem>
                        <SelectItem value="garden">Garden & Outdoors</SelectItem>
                        <SelectItem value="fashion">Fashion & Accessories</SelectItem>
                        <SelectItem value="books">Books & Media</SelectItem>
                        <SelectItem value="toys">Toys & Games</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condition</FormLabel>
                    <Select 
                      value={field.value} 
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="worn">Worn</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
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
            
            <div className="space-y-3">
              <Label>Available For</Label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="availableForExchange"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Exchange</FormLabel>
                        <FormDescription className="text-xs">
                          Offer for exchange with other items
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="availableForDonation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Donation</FormLabel>
                        <FormDescription className="text-xs">
                          Offer as a free donation
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="availableForLoan"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Loan</FormLabel>
                        <FormDescription className="text-xs">
                          Offer as a temporary loan
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              
              <FormField
                control={form.control}
                name="estimatedValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Value (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Location</FormLabel>
                    <FormControl>
                      <Input placeholder="City, State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="preferredExchangeLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Exchange Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Near City Park" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Duration (Days)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="30" 
                        {...field} 
                        disabled={!form.watch("availableForLoan")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="eco-friendly, handmade, vintage (comma separated)" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate tags with commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-forest-600 hover:bg-forest-700 text-white"
            >
              List Item for Barter
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BarterForm;
