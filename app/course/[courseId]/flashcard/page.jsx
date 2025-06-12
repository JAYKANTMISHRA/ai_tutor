"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import FlashcardItem from './_components/FlashcardItem';
import { Button } from '@/components/ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Flashcard = () => {
  const { courseId } = useParams();
  const router = useRouter();
  const [flashCards, setFlashCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState();
  const [api, setApi] = useState();

  useEffect(() => {
    GetFlashCards();
  }, []);

  useEffect(() => {
    if (api) {
      api.on('select', () => {
        setIsFlipped(false);
      });
    }
  }, [api]);

  const GetFlashCards = async () => {
    const result = await axios.post('/api/study-type', {
      courseId: courseId,
      studyType: 'flashcard'
    });
    setFlashCards(result.data);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className='font-bold text-2xl'>Flashcards</h2>

        <Button
          variant="outline"
          size="sm"
          className='hover:bg-blue-200'
          onClick={() => router.push(`/course/${courseId}`)}
        >
          Back to Course
        </Button>
      </div>

      <Carousel setApi={setApi}>
        <CarouselContent>
          {flashCards?.content?.map((flashCard, index) => (
            <CarouselItem key={index} className='flex items-center justify-center mt-10'>
              <FlashcardItem
                handleClick={handleClick}
                isFlipped={isFlipped}
                flashCard={flashCard}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Flashcard;
