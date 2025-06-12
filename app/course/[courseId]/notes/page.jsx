"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ViewNotes = () => {
  const { courseId } = useParams();
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    if (courseId) {
      GetNotes();
    }
    // eslint-disable-next-line
  }, [courseId]);

  const GetNotes = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "notes",
    });
    setNotes(result.data);
  };

  const decodeHTMLEscapedString = (str) => {
    try {
      return JSON.parse(
        `"${str
          .replace(/"/g, '\\"')
          .replace(/```html/g, "")
          .replace(/```/g, "")
          .replace(/\\n/g, "<br>")}`
      );
    } catch (e) {
      return str;
    }
  };

  const getProgressBarColor = (index) =>
    index <= stepCount ? "bg-blue-500" : "bg-gray-300";

  return (
    notes.length > 0 && (
      <div className="p-6 max-w-4xl mx-auto relative">
        {/* Top Right Back Button */}
        {stepCount < notes.length && (
          <div className="absolute top-2 hover:bg-blue-200 right-4 ">
            <Button
              variant="outline"
              size="sm"
              className='hover:bg-blue-200'
              onClick={() => router.push(`/course/${courseId}`)}
            >
              Back to Course
            </Button>
          </div>
        )}

        {/* Step Navigation */}
        <div className="flex items-center gap-4 mb-6 mt-6">
          {stepCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStepCount((prev) => Math.max(prev - 1, 0))}
            >
              Previous
            </Button>
          )}
          <div className="flex-1 flex gap-1">
            {notes.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full ${getProgressBarColor(index)}`}
              ></div>
            ))}
          </div>
          {stepCount < notes.length - 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setStepCount((prev) => Math.min(prev + 1, notes.length - 1))
              }
            >
              Next
            </Button>
          )}
        </div>

        {/* Note Content */}
        <div className="bg-white p-6 rounded-xl shadow-md prose prose-blue max-w-none">
          {stepCount >= notes.length ? (
            <h1 className="text-2xl font-semibold text-center">
              Notes Completed
            </h1>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: decodeHTMLEscapedString(notes[stepCount]?.notes || ""),
              }}
            />
          )}
        </div>
      </div>
    )
  );
};

export default ViewNotes;
