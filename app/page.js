'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleStartLearning = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-blue-200 text-gray-900">
      {/* Hero Section */}
      <section className="text-center px-4 py-20 bg-blue-200">
        <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
          🚀 Now with Advanced AI Technology
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#6c47ff] mb-4">
          Learn Smarter with<br />AI-Powered Education
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Experience personalized learning like never before. Our AI tutor adapts to your unique learning style,
          tracks your progress, and helps you achieve your educational goals faster and more effectively.
        </p>
        <div className="flex justify-center">
          <Button onClick={handleStartLearning} className="bg-[#3d5afe] text-white px-6 py-3">
            Start Learning Now <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm text-gray-700">Active Learners</div>
          </div>
          <div>
            <div className="text-2xl font-bold">1M+</div>
            <div className="text-sm text-gray-700">Lessons Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm text-gray-700">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-gray-700">AI Support</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
