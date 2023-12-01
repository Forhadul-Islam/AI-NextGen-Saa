'use client';
import { cn } from '@/lib/utils';
import {
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const montserret = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-orange-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-violet-500',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-pink-500',
  },
  {
    label: 'Music',
    icon: MusicIcon,
    href: '/music',
    color: 'text-green-500',
  },
  {
    label: 'Code Generation',
    icon: LayoutDashboard,
    href: '/code',
    color: 'text-sky-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-white',
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col space-y-4 h-full bg-gray-900 text-white">
      <Link href="/dashboard">
        <div
          className={cn(
            'text-xl p-3 mb-4 flex items-center',
            montserret.className,
          )}
        >
          Logo Goes Here
        </div>
      </Link>
      <div className="space-y-2 flex flex-col">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            <div
              className={cn(
                'flex items-center flex-1 hover:bg-gray-800 transition-all duration-75 w-[95%] mx-auto p-2 rounded-sm',
                pathname === route.href && 'bg-gray-800',
              )}
            >
              <route.icon className={cn('h-5 w-5 mr-3 ', route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
