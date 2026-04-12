import React from 'react';
import HeroArea from './HeroArea';
import { useLoaderData } from 'react-router';
import CourseCards from './CourseCards';
// import bgImage from "../assets/bg.jpg";
// import dashboardImage from "../assets/dashboard.jpg";

const Home = () => {
  const courseCards = useLoaderData();
  console.log(courseCards);
  return (
    <div>
      <div className='mb-20'>
        <HeroArea></HeroArea>
      </div>
      <div>
        <h2 className='text-center font-bold text-2xl'>All Coursees</h2>
      </div>
      <div className='grid md:grid-cols-3 gap-5 w-11/12 mx-auto'>
        {courseCards.slice(0, 6).map(courseCard => <CourseCards key={courseCard.skillId} courseCard={courseCard}></CourseCards>)}
      </div>
    </div>
  );
};

export default Home;