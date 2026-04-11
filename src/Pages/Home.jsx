import React from 'react';
import HeroArea from './HeroArea';
// import bgImage from "../assets/bg.jpg";
// import dashboardImage from "../assets/dashboard.jpg";

const Home = () => {
    return (
      <div>
        <div className='mb-20'>
            <HeroArea></HeroArea>
        </div>
        <div>
            <h2>All Cards</h2>
        </div>
      </div>
    );
};

export default Home;