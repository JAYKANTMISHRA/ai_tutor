import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TopicInput = ({ setTopic, setDifficultyLevel }) => {
  return (
    <div className="mt-10 w-full max-w-3xl mx-auto bg-white shadow-md p-8 rounded-xl space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          📌 Enter a Topic or Paste Content
        </h2>
        <p className="text-gray-500">
          This content will be used to generate your personalized study material.
        </p>
      </div>

      {/* Textarea */}
      <Textarea
        placeholder="Start writing or paste your content here..."
        className="h-40 resize-none p-4 text-base border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
        onChange={(e) => setTopic(e.target.value)}
      />

      {/* Difficulty Selector */}
      <div>
        <h2 className="text-lg font-medium text-gray-800 mb-2">
          🎯 Select the Difficulty Level
        </h2>
        <Select onValueChange={(value) => setDifficultyLevel(value)}>
          <SelectTrigger className="w-full border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition">
            <SelectValue placeholder="Choose Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EASY">🟢 Easy</SelectItem>
            <SelectItem value="MODERATE">🟡 Moderate</SelectItem>
            <SelectItem value="HARD">🔴 Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TopicInput;
