"use client"
import DashboardHeader from '@/app/dashboard/_components/DashboardHeader';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseIntroCard from './_compnents/CourseIntroCard';
import StudyMaterialSection from './_compnents/StudyMaterialSection';
import ChapterList from './_compnents/ChapterList';

const Course = () => {
    const { courseId } = useParams();
    const [course,setCourse]=useState();
    useEffect(() => {
        if (courseId) {
            GetCourse();
        }
    }, [courseId]);  

    const GetCourse = async () => {
        try {
            const result = await axios.get(`/api/courses?courseId=${courseId}`);
        
        setCourse(result.data.result);
        } catch (error) {
            console.error("Axios Error:", error); 
        }
    };

    return (
        <div>
            
             
             <div  >
            {/* // Course Details */}
            <CourseIntroCard  course={course} />
            {/* //study material option */}
             <StudyMaterialSection courseId={courseId} course={course} />

            {/* //chapterlist */}
            <ChapterList course={course} />
            </div>
        </div>
    );
};

export default Course;
