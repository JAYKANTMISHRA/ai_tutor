import React from 'react'

const ChapterList = ({course}) => {
    //   console.log(course)

    const CHAPTERS=course?.courseLayout?.studyMaterial?.chapters;
  return (

    <div className='mt-5 ' >
        <h2 className='font-medium text-xl' >Chapters</h2>
       
       <div>
       {
  CHAPTERS?.map((chapter, index) => (
    <div
      key={chapter.id || index}
      className='flex gap-5 items-center p-4 border shadow-md mb-2 rounded-lg bg-blue-300'
      
    >
      <div>
        <h2 className='font-medium'>{chapter.chapterTitle}</h2>
      </div>
    </div>
  ))
}
       </div>


    </div>
  )
}

export default ChapterList