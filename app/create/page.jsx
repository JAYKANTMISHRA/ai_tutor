"use client";
import { useState } from 'react';
import React from 'react';
import SelectOption from './_components/SelectOption';
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Toaster } from "@/components/ui/sonner";

const Create = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const GenerateCourseOutline = async () => {
    setLoading(true);
    const courseId = uuidv4();
    try {
      await axios.post('/api/generate-course-outline', {
        courseId,
        ...formData,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      toast.success("Your course is generating. Redirecting to dashboard...");
      router.replace('/dashboard');
    } catch (err) {
      toast.error("Failed to generate course outline.");
    } finally {
      setLoading(false);
    }
  };
   console.log(formData);
  return (
    <div className="min-h-screen w-full py-20 px-4 md:px-24 lg:px-48 bg-[#f9fafb]">
      <Toaster />

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          ✍️ Create Your Study Material
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Follow the steps to personalize your content.
        </p>
      </div>

      {/* Step Component */}
      <div className="w-full bg-white p-8 rounded-xl shadow-md transition-all duration-300">
        {step === 0 ? (
          <SelectOption
            selectedStudyType={(value) => handleUserInput('courseType', value)}
          />
        ) : (
          <TopicInput
            setTopic={(value) => handleUserInput('topic', value)}
            setDifficultyLevel={(value) =>
              handleUserInput('difficultyLevel', value)
            }
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-10 w-full max-w-3xl mx-auto">
        {step !== 0 ? (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            ← Previous
          </Button>
        ) : (
          <div></div>
        )}

        {step === 0 ? (
          <Button onClick={() => setStep(step + 1)}>Next →</Button>
        ) : (
          <Button onClick={GenerateCourseOutline} disabled={loading}>
            {loading ? <Loader className="animate-spin" /> : 'Generate'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Create;
