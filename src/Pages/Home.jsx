import React, { useEffect, useState } from 'react';
import HeroArea from './HeroArea';
import { NavLink, useLoaderData } from 'react-router';
import CourseCards from './CourseCards';
import Footer from '../Components/Footer';
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/courseFeture.json");
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  const courseCards = useLoaderData();
  // console.log(courseCards);
  const handleProgramming = ()=>{
    console.log(courseCards);
  }
  return (
    <div>
      
      <div className='mb-20'>
        <HeroArea></HeroArea>
      </div>
      <div>
        <h2 className='text-center font-bold text-2xl'>Cursus Main Demos</h2>
      </div>
      <div className='grid md:grid-cols-3 gap-5 w-11/12 mx-auto'>
        {courseCards.slice(0, 6).map(courseCard => <CourseCards key={courseCard.skillId} courseCard={courseCard}></CourseCards>)}

      </div>
      {/* Inner Pages Demos */}
      <div>
        <h2 className='text-2xl font-bold text-center p-10'>Inner Pages Demos</h2>
        <div className='flex justify-center items-center gap-5 mb-10'>
          
          <NavLink onClick={handleProgramming}>Programming</NavLink>
          <NavLink>Photography</NavLink>
          <NavLink>Design</NavLink>
          

        </div>
      </div>
      {/* Cursus Features */}
      <div>
        <h2 className="text-center font-bold text-2xl mb-6">
          Course Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-11/12 mx-auto">

          {data.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 flex flex-col items-center text-center
        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={d.image}
                alt={d.name}
                className="w-20 h-20 object-contain mb-3"
              />

              {/* Text */}
              <h3 className="font-bold text-lg text-gray-800">
                {d.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>

  );
};

export default Home;