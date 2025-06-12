'use client';
import { useState } from 'react';
import {
  BookOpen,
  Briefcase,
  Target,
  Code,
  MoreHorizontal,
} from 'lucide-react';

const SelectOption = ({ selectedStudyType }) => {
  const options = [
    {
      name: 'Exam',
      description: 'Prepare for academic exams and tests',
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
    {
      name: 'Job Interview',
      description: 'Get ready for your next career opportunity',
      icon: <Briefcase className="h-6 w-6 text-green-600" />,
    },
    {
      name: 'Practice',
      description: 'Build skills through targeted practice',
      icon: <Target className="h-6 w-6 text-purple-600" />,
    },
    {
      name: 'Coding Preparation',
      description: 'Master programming concepts and algorithms',
      icon: <Code className="h-6 w-6 text-orange-600" />,
    },
    {
      name: 'Other',
      description: 'Custom study material for any topic',
      icon: <MoreHorizontal className="h-6 w-6 text-gray-600" />,
    },
  ];

  const [selected, setSelected] = useState('');

  return (
    <div className="w-full bg-[#f7f8fa] text-gray-800 px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          What type of study material would you like to create?
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Choose the category that best matches your learning objective
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {options.map((option, index) => {
            const isActive = selected === option.name;
            return (
              <div
                key={index}
                onClick={() => {
                  setSelected(option.name);
                  selectedStudyType(option.name);
                }}
                className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 shadow-sm ${
                  isActive
                    ? 'bg-white border-blue-500 ring-2 ring-blue-300'
                    : 'bg-white hover:shadow-md border-gray-200'
                } flex flex-col items-center justify-center text-center gap-3`}
              >
                <div className="p-3 bg-blue-50 rounded-full">{option.icon}</div>
                <h3 className="text-base font-semibold">{option.name}</h3>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
