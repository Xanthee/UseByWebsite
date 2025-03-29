import './index.css'
import React from 'react';

function App() {
  return (
    <div className="w-screen flex flex-col h-screen">
      <div 
        className="h-full w-full p-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      >

        <h1 className="text-4xl font-bold text-white pb-20">UseBy</h1>
        <div className="text-white p-28">
          <h1 className="text-7xl font-bold mb-8">Keep It Fresh, Together</h1>
          <h2 className="text-4xl font-light">Track and share food expiry dates effortlessly with your housemates.</h2>
          <div className="mt-12 flex flex-row">
            <h4 className="font-light text-2xl">Download the app for free and start tracking your food now.</h4>
            <h4 className="ml-1 font-bold text-2xl underline"> It's only 1 click away.</h4>
          </div>
        </div>
      </div>

      <div className="w-screen h-20 bg-indigo-800 justify-center text-center p-8">
        <h1 className="text-white font-bold">Footer</h1>
      </div>
    </div>
    
  )
}

export default App
