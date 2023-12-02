import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="px-4 md:px-8 flex items-center  gap-x-4 h-50">
      <div className={cn('p-2 w-fit rounded-md', bgColor)}>
        <Icon className={cn('w-10 h-10', iconColor)} />
      </div>

      <div className="flex flex-col">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
