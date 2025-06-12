'use client';

import React from 'react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import Link from 'next/link';

const CourseCardItem = ({ course }) => {
  const isGenerating = course?.status === 'Generating';

  return (
    <div className="bg-blue-500 text-white rounded-xl p-6 w-full shadow-md">
      <div className="flex justify-between items-start">
       
        <span className="text-xs px-3 py-1 rounded-full bg-white text-blue-700 font-semibold">
          20 Dec 2024
        </span>
      </div>

      <h2 className="text-2xl font-bold mt-4">
        {course?.courseLayout?.studyMaterial?.courseTitle || 'Untitled Course'}
      </h2>

      <p className="text-sm mt-2 opacity-90">
        AI-generated curriculum tailored for effective learning.
      </p>

      <div className="mt-4">
        <Progress value={0} className="bg-blue-800" />
      </div>

      <div className="mt-5 flex justify-end">
        {isGenerating ? (
          <span className="flex items-center gap-2 text-xs bg-white text-blue-700 px-3 py-1 rounded-full">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Generating...
          </span>
        ) : (
          <Link href={`/course/${course?.courseId}`}>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">
              View Course
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CourseCardItem;
