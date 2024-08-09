import React, { useState } from 'react';

const MegaMenu = () => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  return (
    <div className="bg-pink-300 min-h-screen">
      <nav className="bg-white border-y-2 border-black text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around h-16 items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-4xl font-bold text-black">Logo</a>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-lg font-medium text-black focus:outline-none">
                 Home
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
                  className="flex items-center px-3 py-2 rounded-md text-lg font-medium text-black focus:outline-none"
                >
                   About
                </button>
                {isAboutMenuOpen && (
                  <div className="absolute left-0 mt-2 bg-white border-[1px] border-black rounded-lg p-5 text-black z-10">
                    <div className="flex gap-[70px] p-6">
                      <div className="">
                        <h3 className="text-lg font-bold text-black">Rules</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">Rules</li>
                          <li className="mt-1 text-sm">Rules</li>
                          <li className="mt-1 text-sm">Rules</li>
                          <li className="mt-1 text-sm">Rules</li>
                          <li className="mt-1 text-sm">Rules</li>
                        </ul>
                      </div>
                      <div className="">
                        <h3 className="text-lg font-bold text-black">About</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">about</li>
                          <li className="mt-1 text-sm">about</li>
                          <li className="mt-1 text-sm">about</li>
                          <li className="mt-1 text-sm">about</li>
                        </ul>
                      </div>
                      <div className="">
                        <h3 className="text-lg font-bold text-black">History</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">History</li>
                          <li className="mt-1 text-sm">History</li>
                          <li className="mt-1 text-sm">History</li>
                          <li className="mt-1 text-sm">History</li>
                          <li className="mt-1 text-sm">History</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                  className="flex items-center px-3 py-2 rounded-md text-lg font-medium text-black focus:outline-none"
                >
                   Services
                </button>
                {isServicesMenuOpen && (
                  <div className="absolute left-[-90px] mt-2 bg-white p-5 rounded-lg border-[1px] border-black text-black z-10">
                    <div className="flex gap-[70px] ">
                      <div className="">
                        <h3 className="text-lg font-bold text-black">Web development</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">Development</li>
                          <li className="mt-1 text-sm">Development</li>
                          <li className="mt-1 text-sm">Development</li>
                          <li className="mt-1 text-sm">Development</li>
                          <li className="mt-1 text-sm">Development</li>
                        </ul>
                      </div>
                      <div className="">
                        <h3 className="text-lg font-bold text-black">Marketing</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">Marketing</li>
                          <li className="mt-1 text-sm">Marketing</li>
                          <li className="mt-1 text-sm">Marketing</li>
                          <li className="mt-1 text-sm">Marketing</li>
                          <li className="mt-1 text-sm">Marketing</li>
                        </ul>
                      </div>
                      <div className="">
                        <h3 className="text-lg font-bold text-black">Design</h3>
                        <ul className="mt-2">
                          <li className="mt-1 text-sm">Graphic</li>
                          <li className="mt-1 text-sm">Graphic</li>
                          <li className="mt-1 text-sm">Graphic</li>
                          <li className="mt-1 text-sm">Graphic</li>
                          <li className="mt-1 text-sm">Graphic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="flex items-center px-3 py-2 rounded-md text-lg font-medium text-black focus:outline-none">
                Contact
              </a>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MegaMenu;
