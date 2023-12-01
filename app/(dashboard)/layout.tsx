import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="h-screen relative">
        <aside className="hidden md:flex h-full md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
          <Sidebar />
        </aside>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
