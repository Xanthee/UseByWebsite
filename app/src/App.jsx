import './App.css';
import React, { useRef, useState } from 'react';
import logo from './assets/logo.png';
import team from './assets/team.svg';
import group from './assets/group.svg';
import list from './assets/ListImg.PNG';
import addItem from './assets/AddItemImg.PNG';
import houses from './assets/Houses.png';
import banner from './assets/banner.png';
import addHouse from './assets/AddHouse.mp4';
import addItemVid from './assets/AddItem.mp4';
import setDate from './assets/SetDate.mp4';
import share from './assets/Share.mp4';


function App() {
  const anchor1 = useRef(null);
  const anchor2 = useRef(null);
  const anchor3 = useRef(null);
  const anchor4 = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-full flex flex-col h-full m-0 p-0 overflow-x-hidden">
      
    {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full text-purple-600 font-bold px-4 py-3 flex flex-col sm:flex-row sm:items-center z-50 bg-transparent">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-0 sm:w-1/4">UseBy</h1>
        <div className="flex flex-wrap justify-center sm:justify-end sm:w-3/4 gap-2 sm:gap-4">
          <button
            className="text-xl sm:text-2xl md:text-3xl hover:scale-105 hover:text-purple-950 hover:-translate-y-1 transition-all duration-200 ease-in-out"
            onClick={() => scrollToSection(anchor1)}
          >
            The Problem
          </button>
          <button
            className="text-xl sm:text-2xl md:text-3xl hover:scale-105 hover:text-purple-950 hover:-translate-y-1 transition-all duration-200 ease-in-out"
            onClick={() => scrollToSection(anchor2)}
          >
            The Solution
          </button>
          <button
            className="text-xl sm:text-2xl md:text-3xl hover:scale-105 hover:text-purple-950 hover:-translate-y-1 transition-all duration-200 ease-in-out"
            onClick={() => scrollToSection(anchor3)}
          >
            How to Use
          </button>
          <button
            className="text-xl sm:text-2xl md:text-3xl hover:scale-105 hover:text-purple-950 hover:-translate-y-1 transition-all duration-200 ease-in-out"
            onClick={() => scrollToSection(anchor4)}
          >
            Who We Are
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-purple-950 px-4 sm:px-12 pt-32 sm:pt-40 pb-12 sm:pb-32 flex flex-col min-h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
        <h1 className="text-4xl sm:text-6xl font-bold font-hedveg mb-4">Keep It Fresh, Together</h1>
        <h2 className="text-xl sm:text-3xl font-light">Track and share food expiry dates effortlessly with your housemates.</h2>
        <div className="mt-8 flex flex-col sm:flex-row">
          <h4 className="font-light font-hedveg text-lg sm:text-xl">
            Download the app for free and start tracking your food now.
          </h4>
          <h4 className="ml-0 sm:ml-1 mt-2 sm:mt-0 underline-animation font-light text-lg sm:text-xl text-purple-800 hover:font-bold transition-all duration-200 ease-in-out">
            It's only 1 click away.
          </h4>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="flex justify-center items-center mt-4 w-screen">
        <button
          onClick={() => scrollToSection(anchor1)}
          className="group hover:transition duration-300 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 sm:h-12 w-8 sm:w-12 transition-transform duration-300 group-hover:scale-125"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#9333ea"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </button>
      </div>

      {/* Problem Section */}
      <div  ref={anchor1} className="bg-white text-black min-h-[60vh] p-6 sm:p-12 flex flex-col sm:flex-row justify-evenly">
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
          <img src={group} alt="team" className="h-48 sm:h-auto w-full object-cover" />
        </div>
        <div className="w-full sm:w-1/2 p-8">
          <h1 className="text-2xl sm:text-4xl text-[#520982] font-bold font-hedvig mb-6">
            Housemates? Sick of moldy bread or milk disputes? We get it.
          </h1>
          <h3 className="text-xl font-hostGrotesks">
            Forgotten food goes bad, fridge space turns into a mystery, and no one knows what’s fair game. Our app keeps
            track of it all—so you can stop guessing and start sharing.
          </h3>
          <button
            onClick={() => scrollToSection(anchor3)}
            className="mt-6 text-sm sm:text-base bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Find out more
          </button>
        </div>
      </div>

      {/* Solution Section */}
      <div ref={anchor2} className="flex flex-col sm:flex-row justify-evenly min-h-[80vh] p-6 sm:p-12 mb-8 gap-4">
        {[
          { text: 'Track expiry dates with notifications.', image: list },
          { text: 'Share lists with housemates.', image: addItem },
          { text: 'Mark food as “up for grabs.”', image: houses },
        ].map((item, index) => (
          <div
            key={index}
            className="relative m-2 w-full sm:w-1/4 h-[400px] sm:h-[600px] bg-no-repeat bg-center sm:bg-contain rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col items-start justify-end w-full h-full p-4 sm:p-6">
              <h1 className="text-4xl sm:text-5xl font-semibold text-purple-300 leading-snug">{item.text}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* How to Use Section */}
      <div ref={anchor3} className="flex justify-evenly p-6 sm:p-12">
        {['Step 1', 'Step 2', 'Step 3', 'Step 4'].map((label, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index + 1)}
            className={`px-3 py-1 text-sm sm:text-lg transition-all duration-300 ${
              currentStep === index + 1
                ? 'bg-purple-500 text-white scale-125'
                : 'bg-gray-200 text-black hover:bg-purple-300 scale-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-black min-h-[50vh] flex items-center justify-center">
        <span className="text-2xl sm:text-4xl font-bold text-purple-300">
          {currentStep === 1 && 'Create your house.'}
          {currentStep === 2 && 'Find your product.'}
          {currentStep === 3 && 'Set the date.'}
          {currentStep === 4 && 'Share with housemates.'}
        </span>
        {currentStep === 1 && (
        <video
          className="h-full max-w-md rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          src= {addHouse}
        />
      )}
      {currentStep === 2 && (
        <video
          className="h-full max-w-md rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          src= {addItemVid}
        />
      )}
      {currentStep === 3 && (
        <video
          className="h-full max-w-md rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          src= {setDate}
        />
      )}
      {currentStep === 4 && (
        <video
          className="h-full max-w-md rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          src= {share}
        />
      )}
      </div>

      {/* Who We Are Section */}
      <div ref={anchor4} className="mt-8 bg-white text-black min-h-[60vh] p-6 sm:p-12 flex flex-col sm:flex-row justify-evenly">
        <div className="w-full sm:w-1/2 p-8">
          <h1 className="text-2xl sm:text-4xl text-[#520982] font-extrabold font-hedvig mb-6">Built by Students, for Students</h1>
          <h3 className="text-xl font-hostGrotesks">
            We’re four university students who’ve lived the shared-house struggle—expired yogurt, mystery leftovers, and
            the eternal ‘whose is this?’ debate. So, we made an app to fix it. From late-night coding sessions to testing
            with our own messy fridges, we’ve built something to help students like us save food, save money, and keep the
            peace with housemates.
          </h3>
        </div>
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
          <img src={team} alt="team" className="h-48 sm:h-auto w-full object-cover" />
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#d9dbd9' }} className="text-grey p-6">
        <div className="w-full px-4 flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 w-auto mb-2" />        
          <p className="text-xs sm:text-sm text-gray-700 mb-4">Keep it fresh, together</p>
          <div className="flex space-x-4 mb-2">
            <a href="https://www.tiktok.com/@usebyappofficial?is_from_webapp=1&sender_device=pc" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base">
              TikTok
            </a>
            <a href="https://www.instagram.com/usebyappofficial/" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base">
              Instagram
            </a>
            <a href="mailto:contact@example.com" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base">
              Email
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">© {new Date().getFullYear()} UseBy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;