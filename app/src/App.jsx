import './App.css'
import React, { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';



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
    <div className="w-screen flex flex-col h-full">

        <nav className="sticky top-0 text-white pl-12 pr-12 pt-4 pb-4 flex flex-row w-screen z-50 bg-purple-600">
        <h1 className="text-4xl font-bold w-1/4">UseBy</h1>
        <div className="flex justify-between w-3/4 font-light text-2xl">
          <button className="text-white mr-4 hover:scale-110 hover:text-purple-950 hover:-translate-y-1 transition-all duration-200 ease-in-out" onClick={() => scrollToSection(anchor1)}>The Problem</button>
          <button className="text-white mr-4 hover:scale-110 hover:text-purple-950 hover:-translate-y-1 transition-all duration-200 ease-in-out" onClick={() => scrollToSection(anchor2)}>The Solution</button>
          <button className="text-white mr-4 hover:scale-110 hover:text-purple-950 hover:-translate-y-1 transition-all duration-200 ease-in-out" onClick={() => scrollToSection(anchor3)}>How to Use</button>
          <button className="text-white mr-4 hover:scale-110 hover:text-purple-950 hover:-translate-y-1 transition-all duration-200 ease-in-out" onClick={() => scrollToSection(anchor4)}>Who We Are</button>
        </div>
        </nav>

        <div className="text-white p-20 pt-48 pb-48 h-[80vh] flex flex-col bg-purple-600">
            <h1 className="text-7xl font-bold font-hedveg mb-4">Keep It Fresh, Together</h1>
            <h2 className="text-4xl font-light">Track and share food expiry dates effortlessly with your housemates.</h2>
            <div className="mt-12 flex flex-row">
              <h4 className="font-light font-hedveg text-2xl">Download the app for free and start tracking your food now.</h4>
              <h4 className="ml-1 underline-animation font-light text-2xl text-white hover:font-bold transition-all duration-200 ease-in-out"> It's only 1 click away.</h4>
            </div>
            <p className="absolute bottom-20" ref={anchor1}></p>
        </div>

        <div className="flex justify-center items-center mt-4 w-screen">
          <button
            onClick={() => scrollToSection(anchor1)}
            className="group hover:transition duration-300 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-125"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9333ea"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M19 14l-7 7m0 0l-7-7"
              />
            </svg>
          </button>
        </div>

      <div className="bg-white text-black h-[80vh] p-12 flex flex-row justify-evenly">
        <div className="bg-blue-500 h-full w-1/2">
        </div>
        <div className="w-1/2 p-4">        
          <h1 className="text-4xl font-bold font-hedvig mb-8">Living with housemates? Tired of finding moldy bread or arguing over whose milk went bad? We’ve been there.</h1>
          <h3 className="text-1xl font-hostGrotesks">Forgotten food goes bad, fridge space turns into a mystery, and no one knows what’s fair game. Our app keeps track of it all—so you can stop guessing and start sharing.</h3>
          <button onClick={() => scrollToSection(anchor3)} >Find out more</button>
        </div>
      </div>

      <div ref={anchor2} className="flex flex-row justify-evenly h-[80vh] p-12 mb-12">
        <div className="relative m-4 w-3/12 h-full bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
              <h1 className="fmt-12 mb-4 font-semibold text-4xl text-white leading-snug">Track expiry dates with notifications.</h1>
            </div>
          </div>
          <div className="relative m-4 w-3/12 h-full bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
                <h1 className="fmt-12 mb-4 font-semibold text-4xl text-white leading-snug">Share lists with housemates.</h1>
              </div>             
            </div>
            <div className="relative m-4 w-3/12 h-full bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-start justify-end w-3/4 h-full p-6 pb-16">
                  <h1 className="fmt-12 mb-4 font-semibold text-4xl text-white leading-snug">Mark food as “up for grabs.”</h1>
                </div>             
              </div>
            </div>
      
          


            <div ref={anchor3} className="flex justify-evenly p-12">
              {[
                "Step 1",
                "Step 2",
                "Step 3",
                "Step 4"
              ].map((label, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index + 1)}
                className={`px-4 py-2 text-xl transition-all duration-300 ${
                  currentStep === index + 1
                    ? 'bg-purple-500 text-white scale-150'
                    : 'bg-gray-200 text-black hover:bg-purple-300 scale-100'
                }`}
              >
                {label}
              </button>
              ))}
            </div>

            <div className="bg-gray-100 h-[65vh] flex items-center justify-center">
              <span className="text-4xl font-bold">
                {currentStep === 1 && "Add your food."}
                {currentStep === 2 && "Set the date."}
                {currentStep === 3 && "Share with mates."}
                {currentStep === 4 && "Get notified."}
              </span>
            </div>

      <div className="mt-12 bg-white text-black h-[80vh] p-12 flex flex-row justify-evenly">
        <div className="w-1/2 p-4">        
          <h1 className="text-4xl font-extrabold font-hedvig mb-8">Built by Students, for Students</h1>
          <h3 className="text-1xl font-hostGrotesks">We’re four university students who’ve lived the shared-house struggle—expired yogurt, mystery leftovers, and the eternal ‘whose is this?’ debate. So, we made an app to fix it. From late-night coding sessions to testing with our own messy fridges, we’ve built something to help students like us save food, save money, and keep the peace with housemates.</h3>
        </div>
        <div className="bg-blue-500 h-full w-1/2">

        </div>
      </div>     

      <footer className="bg-gray-800 text-white p-6">
        <div className="w-screen px-4 flex flex-col items-center">
          <img src="/logo" alt="Logo" className="h-10 w-auto mb-2" />
          <p className="text-sm text-gray-400 mb-4">Keep it fresh, together </p>
          <div className="flex space-x-4 mb-2">
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-200">TikTok</a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-200">Instagram</a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors duration-200">Email</a>
          </div>
          <p className="text-m text-gray-500">© {new Date().getFullYear()} UseBy</p>
        </div>
      </footer>
    </div>
    
  )
}

export default App
