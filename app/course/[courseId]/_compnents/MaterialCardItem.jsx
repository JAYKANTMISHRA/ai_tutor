import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { RefreshCcw } from 'lucide-react';
import Link from 'next/link';

const MaterialCardItem = ({ item, studyTypeContent, course, courseId, refreshData }) => {
  const [loading, setLoading] = useState(false);

  let chapters = '';
  course?.courseLayout?.studyMaterial?.chapters.forEach((chapter) => {
    chapters = chapter.chapterTitle + ', ' + chapters;
  });

  const Generatecontent = async () => {
    setLoading(true);
    try {
      const result = await axios.post('/api/study-type-content', {
        courseId: course.courseId,
        type: item.type,
        chapters: chapters,
      });
    //  console.log(result);
     setTimeout(() => {
      setLoading(false);
      refreshData(true);
    }, 10000);
    } catch (error) {
      console.log("Error generating content:", error);
    } 

  };

  return (
    <div className={`border shadow-md rounded-lg p-5 flex flex-col items-center bg-green-300
      ${studyTypeContent && studyTypeContent[item.type] == null && 'grayscale opacity-50'}
    `}>
      {
        studyTypeContent && studyTypeContent[item.type] == null ? (
          <h2 className='p-1 px-2 bg-gray-500 text-white rounded-full text-[10px] mb-2'>Generate</h2>
        ) : (
          
          <h2 className='p-1 px-2 bg-green-500 text-white rounded-full text-[10px] mb-2'>Ready</h2>
        )
      }

      <h2 className='font-medium mt-3'>{item.name}</h2>
     

      {
        studyTypeContent && studyTypeContent[item.type] == null ? (
          <Button
            className='mt-3 w-full bg-blue-600'
            variant="outline"
            onClick={() => Generatecontent()}
          >
            {loading ? <RefreshCcw className='animate-spin' /> :'Generate'}
           
          </Button>
        ) : (
          <Link href={`/course/${courseId}/${item.type}`} className='w-full'>
            <Button className='mt-3 w-full bg-blue-600' variant="outline">
              View
            </Button>
          </Link>
        )
      }
    </div>
  );
};

export default MaterialCardItem;
