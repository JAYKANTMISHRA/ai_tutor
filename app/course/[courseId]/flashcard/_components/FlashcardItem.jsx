import React from 'react'
import ReactCardFlip from 'react-card-flip';
const FlashcardItem = ({ isFlipped, handleClick, flashCard }) => {
  return (
    <div className='flex items-center justify-center '>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='p-4 bg-blue-400 text-white flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]' onClick={handleClick}>
          <h2>{flashCard?.front}</h2>
        </div>
        <div className='p-4 bg-white text-blue-500 flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]' onClick={handleClick}>
          <h2>{flashCard?.back}</h2>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default FlashcardItem