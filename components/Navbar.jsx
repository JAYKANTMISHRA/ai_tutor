'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white shadow-md">
      <div className="text-2xl font-bold text-[#6c47ff]">🧠 AI Tutor</div>
      <nav className="flex items-center gap-6">
        <Link href="/" className="text-gray-700 hover:text-black flex items-center gap-1">
          <Home size={18} />
          Home
        </Link>
        <Link href="/create" className="text-gray-700 hover:text-black">
          Generate New Course
        </Link>
        <Link href="/dashboard">
          <Button className="bg-black text-white px-5 py-2 flex items-center gap-2">
            Go to Dashboard <ArrowRight size={16} />
          </Button>
        </Link>

        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button variant="outline" onClick={() => router.push('/sign-in')}>
            Sign In
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
