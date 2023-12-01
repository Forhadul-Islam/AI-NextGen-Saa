'use client';
import { AlignJustify } from 'lucide-react';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" className="flex md:hidden">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
