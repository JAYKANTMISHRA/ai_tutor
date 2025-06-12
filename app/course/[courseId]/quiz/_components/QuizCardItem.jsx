import React, { useState } from 'react';

const QuizCardItem = ({ quiz, userSelectedoption }) => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className='mt-10 p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl'>
      <h2 className='font-semibold text-2xl text-center text-gray-800'>
        {quiz?.question}
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
        {quiz?.options?.map((option, index) => (
          <h2
            key={index}
            onClick={() => {
              setSelectedOption(option);
              userSelectedoption(option);
            }}
            className={`p-4 border rounded-xl text-center text-lg font-medium cursor-pointer transition-all duration-200 
              ${
                selectedOption === option
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-gray-50 text-gray-800 hover:bg-blue-100 hover:border-blue-300'
              }`}
          >
            {option}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default QuizCardItem;
