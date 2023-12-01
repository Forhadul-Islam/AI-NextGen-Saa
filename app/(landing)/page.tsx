import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Landing ( Unproteted ) </div>
      <UserButton />
    </div>
  );
}
