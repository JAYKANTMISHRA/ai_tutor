import React from 'react';
import WelcomeBanner from './_components/WelcomeBanner';
import CourseList from './_components/CourseList'; 

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <CourseList />
    </div>
  );
};

export default Dashboard;
