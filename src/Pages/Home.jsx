import React, { useEffect, useState } from 'react';
import HeroArea from './HeroArea';
import { NavLink, useLoaderData } from 'react-router';
import CourseCards from './CourseCards';
import Footer from '../Components/Footer';

const Home = () => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  const [active, setActive] = useState("All");
  // Fetch feature data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/courseFeture.json");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  // Loader data
  const courseCards = useLoaderData();

  // Default show সব course
  useEffect(() => {
    setCard(courseCards);
  }, [courseCards]);

  // 🔥 Dynamic category filter
  const handleCategory = (category) => {
    setActive(category);
    if (category === "All") {
      setCard(courseCards);
    } else {
      const filteredCards = courseCards.filter(
        singleCard => singleCard.category === category
      );
      setCard(filteredCards);
    }
  };

  return (
    <div>

      {/* Hero */}
      <div>
        <HeroArea />
      </div>

      {/* Main Demo 6 card show */}
      <div className='bg-gradient-to-r from-blue-100 to-purple-100 p-8'>
        <div>
          <h2 className='text-center font-bold text-2xl mb-7'>
            Cursus Main Demos
          </h2>
        </div>

        <div className='grid md:grid-cols-3 gap-5 w-11/12 mx-auto'>
          {courseCards.slice(0, 6).map(courseCard => (
            <CourseCards
              key={courseCard.skillId}
              courseCard={courseCard}
            />
          ))}
        </div>

      </div>

      {/* 🔥 Category Buttons */}
      <div className='bg-gradient-to-r from-sky-100 to-indigo-200 p-5'>
        <div>
          <h2 className='text-2xl font-bold text-center p-10'>
            Inner Pages Demos
          </h2>

          <div className='flex justify-center items-center gap-5 mb-10'>

            <button
              onClick={() => handleCategory("All")}
              className={active === "All" ? "bg-blue-500 text-white px-4 py-2 rounded" : "px-4 py-2"}
            >
              All
            </button>

            <button
              onClick={() => handleCategory("Programming")}
              className={active === "Programming" ? "bg-blue-500 text-white px-4 py-2 rounded" : "px-4 py-2"}
            >
              Programming
            </button>

            <button
              onClick={() => handleCategory("Photography")}
              className={active === "Photography" ? "bg-blue-500 text-white px-4 py-2 rounded" : "px-4 py-2"}
            >
              Photography
            </button>

            <button
              onClick={() => handleCategory("Design")}
              className={active === "Design" ? "bg-blue-500 text-white px-4 py-2 rounded" : "px-4 py-2"}
            >
              Design
            </button>

          </div>
        </div>

        {/* 🔥 Filtered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto">
          {
            card.map(singleCard => (
              <div key={singleCard.skillId} className="card p-4 shadow hover:shadow-xl transition">
                <img src={singleCard.image} alt="" />
                <h2 className='font-bold text-lg mt-2'>
                  {singleCard.skillName}
                </h2>
                <p className='text-gray-500'>
                  {singleCard.category}
                </p>
                <p className='text-blue-500 font-semibold'>
                  ${singleCard.price}
                </p>
              </div>
            ))
          }
        </div>
      </div>

      {/* Course Features */}
      <div className=" bg-gradient-to-r from-cyan-100 to-blue-3000 p-8">
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
              <img
                src={d.image}
                alt={d.name}
                className="w-20 h-20 object-contain mb-3"
              />
              <h3 className="font-bold text-lg text-gray-800">
                {d.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className='mt-[-80px]'>
        <Footer />
      </div>

    </div>
  );
};

export default Home;