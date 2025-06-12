"use client";
import { useUser } from '@clerk/nextjs';
import React from 'react';
import { Sparkles } from 'lucide-react';

const WelcomeBanner = () => {
  const { user } = useUser();

  return (
    <div className="bg-blue-600 text-white w-full rounded-xl p-6 flex items-center gap-5 shadow-md">
      <div className="bg-white text-blue-600 rounded-full p-3">
        <Sparkles className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Welcome back, {user?.fullName || "Learner"} 👋</h2>
        <p className="text-sm text-blue-100 mt-1">
          Let’s continue learning and creating your AI-powered course.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
