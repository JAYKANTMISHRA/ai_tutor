'use client'
import React from 'react'
import  Image  from 'next/image';
import { Progress } from '@/components/ui/progress';


const CourseIntroCard = ({course}) => {
  return (
    
    <div className='flex gap-5 items-center p-5 border shadow-md rounded-lg bg-blue-300' >
    
     
     <div>
      {/* {console.log(course)} */}
      <h2 className='font-bold text-2xl' >{course?.courseLayout.studyMaterial.courseTitle}</h2>
      <p className='text-sm '>{course?.courseLayout.studyMaterial.courseDescription}</p>
      <Progress  className='mt-3' />
      
      <h2 className='mt-3 text-lg' > Total Chapter:{course?.courseLayout?.studyMaterial.chapters?.length}  </h2>

     </div>
    </div>
  )
}

export default CourseIntroCard