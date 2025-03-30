import './index.css'
import React, { useRef } from 'react';

function App() {

  const anchor1 = useRef(null);
  const anchor2 = useRef(null);
  const anchor3 = useRef(null);
  const anchor4 = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-screen flex flex-col h-full">
      <div 
        className="h-full w-full p-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      >

        <nav className="sticky top-0 text-white pb-20 pt-4 flex flex-row w-full z-50">
        <h1 className="text-4xl font-bold w-1/4">UseBy</h1>
        <div className="flex justify-between w-3/4 font-light text-2xl">
          <button className="text-white mr-4 hover:scale-110 hover:text-purple-700 hover:-translate-y-1 transition-all duration-200 ease-in-out" onClick={() => scrollToSection(anchor1)}>Go to Section 1</button>
          <button className="text-white mr-4 hover:scale-110 hover:text-purple-700 hover:-translate-y-1 transition-all duration-200 ease-in-out" onClick={() => scrollToSection(anchor2)}>Go to Section 2</button>
          <button className="text-white mr-4 hover:scale-110 hover:text-purple-700 hover:-translate-y-1 transition-all duration-200 ease-in-out" onClick={() => scrollToSection(anchor3)}>Go to Section 3</button>
          <button className="text-white mr-4 hover:scale-110 hover:text-purple-700 hover:-translate-y-1 transition-all duration-200 ease-in-out" onClick={() => scrollToSection(anchor4)}>Go to Section 4</button>
        </div>
        </nav>

        <div className="text-white p-20 h-full flex flex-row">
          <div className="w-3/4 flex flex-col">
            <h1 className="text-7xl font-bold mb-4">Keep It Fresh, Together</h1>
            <h2 className="text-4xl font-light">Track and share food expiry dates effortlessly with your housemates.</h2>
            <div className="mt-12 flex flex-row">
              <h4 className="font-light text-2xl">Download the app for free and start tracking your food now.</h4>
              <h4 className="ml-1 font-bold text-2xl text-purple-400 underline"> It's only 1 click away.</h4>
            </div>
          </div>
          <div className="w-1/4 bg-blue-900">
          <p>Advertisement image</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-500 h-96"></div>

      <footer className="bg-gray-800 text-white p-6">
        <div className="w-screen px-4 flex flex-col items-center">
          <img src="/logo" alt="Logo" className="h-10 w-auto mb-2" />
          <p className="text-sm text-gray-400 mb-4"> tagline maybe? </p>
          <div className="flex space-x-4 mb-2">
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-200">Twitter</a>
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
