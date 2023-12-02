'use client';

import { MessagesSquare, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Heading } from '@/components/Heading';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './constants';

const ConversationPage = () => {
  const form = useForm<Zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className="h-[calc(100vh-70px)] antialiased flex-shrink-0 flex flex-col ">
      <Heading
        title="Conversation"
        description="The most advanced conversation model!"
        icon={MessagesSquare}
        iconColor="text-purple-500"
        bgColor="bg-purple-500/10"
      />
      <div className="px-4 lg:px-8 bottom-0 mt-5 bg-indigo-200/20 flex-1 ">
        <div className=" ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full border p-4 px-3 md:px-6 rounded-lg focus-within:shadow-md grid grid-cols-12 gap-2 bg-white my-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl>
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="What is the radius of the Moon?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2">
                <Send />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
