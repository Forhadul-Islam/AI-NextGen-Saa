'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10',
  },
  {
    label: 'Chat with AI',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    label: 'Generate Images with AI',
    icon: ImageIcon,
    href: '/image',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    label: 'Music',
    icon: MusicIcon,
    href: '/music',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    label: 'Code Generation',
    icon: LayoutDashboard,
    href: '/code',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10',
  },
];
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="text-center">
        <h2 className="font-bold text-2xl md:text-4xl">
          Explore The Ultimate AI Solution
        </h2>
        <p className="text-muted-foreground">
          Chat with the smpar AI - Experience the power of AI
        </p>
      </div>
      <div className="space-y-3 px-4 md:px-20 lg:px-32 text-sm">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5  flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4 ">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
