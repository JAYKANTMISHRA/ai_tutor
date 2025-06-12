'use client'
import React, { useEffect, useState } from 'react'
import MaterialCardItem from './MaterialCardItem'
import axios from 'axios'
import Link from 'next/link';

const StudyMaterialSection = ({courseId,course}) => {

   const MaterialList=[
    {
        name:'Chapter Notes',
         desc:'Read Chapter Notes',
        path:'/notes',
        type:'notes',
       
    },
    {
         name:'Flash Cards',
            desc:'Read Flash Cards',
            path:'/flashcards',
            type:'flashcard',
    }
    ,

    {
        name:'Chapter Quiz',
        desc:'Attempt Chapter Quiz',
        path:'/quiz',
        type:'quiz',
    }
   ]
  const[studyTypeContent,setStudyTypeContent]=useState();
  
   useEffect(()=>{
      GetStudyMaterial();
   },[courseId])

   const GetStudyMaterial = async ()=>{
       const result =await axios.post('/api/study-type',{
          courseId:courseId,
          studyType:'ALL'
       })
     //  console.log(result.data);
       setStudyTypeContent(result.data);
   }

  return (
    <div className='mt-5' >
       <h2 className='font-medium text-xl' >Study Material</h2>
       
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5' >
       {MaterialList.map((item, index) => (
       
     <MaterialCardItem key={item.id || index} item={item} 
       studyTypeContent={studyTypeContent}
       course={course} 
       courseId={courseId}
       refreshData={GetStudyMaterial}
        />
        
   ))}
       </div>

    </div>
  )
}

export default StudyMaterialSection
