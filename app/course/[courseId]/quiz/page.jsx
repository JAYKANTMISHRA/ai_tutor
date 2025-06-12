'use client'
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import StepProgress from './_components/StepProgress';
import QuizCardItem from './_components/QuizCardItem';
import { Button } from '@/components/ui/button';

const Quiz = () => {
    const { courseId } = useParams();
    const router = useRouter();
    const [quizData, setQuizData] = useState();
    const [stepCount, setStepCount] = useState(0);
    const [quiz, setQuiz] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

    useEffect(() => {
        GetQuiz();
        // eslint-disable-next-line
    }, []);

    const GetQuiz = async () => {
        try {
            const result = await axios.post('/api/study-type', {
                courseId: courseId,
                studyType: 'quiz'
            });
            console.log(result.data);
            setQuizData(result.data);
            setQuiz(result.data?.content?.quiz.questions || []);
        } catch (error) {
            setQuiz([]);
        }
    }

    const checkAnswer = (userAnswer, currentQuestion) => {
        setCorrectAnswer(currentQuestion?.answer);
        setIsCorrectAnswer(userAnswer === currentQuestion?.answer);
    }

    useEffect(() => {
        setCorrectAnswer(null);
        setIsCorrectAnswer(null);
    }, [stepCount]);

    return (
        <div className="relative p-6">
            {/* Top-Right Back to Course Button */}
            <div className="absolute top-4 right-4">
                <Button
                    variant="outline"
                    size="sm"
                    className='hover:bg-blue-200'
                    onClick={() => router.push(`/course/${courseId}`)}
                >
                    Back to Course
                </Button>
            </div>

            <h2 className='font-bold text-2xl mb-4'>Quiz</h2>

            <StepProgress
                data={quiz}
                setStepCount={setStepCount}
                stepCount={stepCount}
            />

            <div>
                {quiz?.[stepCount] && (
                    <QuizCardItem
                        quiz={quiz[stepCount]}
                        userSelectedoption={(v) => checkAnswer(v, quiz[stepCount])}
                    />
                )}
            </div>

           {isCorrectAnswer === true && (
  <div className='flex justify-center mt-6'>
    <div className='bg-green-500 text-white px-5 py-2 rounded-full shadow font-semibold text-sm'>
      ✅ Correct Answer
    </div>
  </div>
)}

{isCorrectAnswer === false && (
  <div className='flex flex-col items-center mt-6 gap-2'>
    <div className='bg-red-500 text-white px-5 py-2 rounded-full shadow font-semibold text-sm'>
      ❌ Wrong Answer
    </div>
    <div className='bg-gray-200 text-black px-4 py-1 rounded-full text-sm font-medium'>
      Correct: {correctAnswer}
    </div>
  </div>
)}

        </div>
    );
};

export default Quiz;
