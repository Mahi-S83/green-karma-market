
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BarterInfoAccordion = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-forest-800">How The Eco Loop Barter Works</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-forest-700">What is The Eco Loop Barter?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">The Eco Loop Barter is our community exchange platform where you can trade, donate, or loan eco-friendly items you no longer need.</p>
              <p>This initiative supports our mission of sustainability by extending the lifecycle of products and reducing waste.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-forest-700">How to Exchange Items</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Create a listing by clicking the "List an Item" button</li>
                <li>Choose "Exchange" as one of the availability options</li>
                <li>Be specific about what you're looking to receive in return</li>
                <li>When someone is interested, you'll receive a contact message</li>
                <li>Arrange a mutually convenient location and time to complete the exchange</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-forest-700">How to Donate Items</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">To donate items:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Create a listing and select the "Donation" option</li>
                <li>Provide clear photos and an accurate description</li>
                <li>Specify any pickup requirements or limitations</li>
                <li>Arrange for pickup or delivery once someone expresses interest</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-forest-700">How to Loan Items</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">Our loan system allows you to share items that are only occasionally used:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>List your item and select the "Loan" option</li>
                <li>Specify the maximum duration of the loan in days</li>
                <li>Clearly state any conditions for borrowing</li>
                <li>Consider creating a simple agreement with the borrower</li>
                <li>Arrange for pickup/return or delivery</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-forest-700">Community Guidelines</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Be honest about the condition of your items</li>
                <li>Respond to inquiries promptly and respectfully</li>
                <li>Honor your commitments for exchanges, donations, or loans</li>
                <li>Meet in safe, public locations for exchanges</li>
                <li>Provide feedback after successful transactions</li>
                <li>Only list items that are legal and appropriate</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default BarterInfoAccordion;
