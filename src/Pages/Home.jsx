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
        <div className='grid grid-cols-3 gap-5'>
           
            {courseCards.map(courseCard=><CourseCards key={courseCard.skillId} courseCard={courseCard}></CourseCards>)}
        </div>
      </div>
    );
};

export default Home;