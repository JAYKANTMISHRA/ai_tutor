import React from 'react'
import { Button } from '@/components/ui/button'

const StepProgress = ({ stepCount, setStepCount, data }) => {
  return (
    <div className='flex gap-5 items-center w-full'>
      {stepCount !== 0 && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStepCount(stepCount - 1)}
        >
          Previous
        </Button>
      )}

      <div className="flex flex-1 gap-2">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`flex-1 h-2 rounded-full transition-colors duration-200 ${
              index < stepCount
                ? 'bg-blue-500'
                : index === stepCount
                ? 'bg-blue-300'
                : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>

      {stepCount < data.length - 1 && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStepCount(stepCount + 1)}
        >
          Next
        </Button>
      )}
    </div>
  )
}

export default StepProgress