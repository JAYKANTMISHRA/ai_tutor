'use client';

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CourseCardItem from './CourseCarditem';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const CourseList = () => {
  const { user } = useUser();
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) GetCourseList();
  }, [user]);

  const GetCourseList = async () => {
    setLoading(true);
    try {
      const result = await axios.post('/api/courses', {
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      setCourseList(result.data.result);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
    setLoading(false);
  };

  return (
    <div className="mt-10 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-2xl">📚 Your Study Material</h2>
        <Button
          onClick={GetCourseList}
          className="bg-blue-500 text-white hover:bg-blue-700 flex gap-2 items-center"
        >
          <RefreshCw className={loading ? 'animate-spin' : ''} size={18} />
          Refresh
        </Button>
      </div>

      {!loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseList?.map((course, index) => (
            <CourseCardItem course={course} key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-64 w-full bg-blue-300/30 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      )}

      {!loading && courseList.length === 0 && (
        <p className="text-center text-white mt-10">No courses found. Start generating one!</p>
      )}
    </div>
  );
};

export default CourseList;
