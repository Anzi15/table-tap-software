"use client"
import './globals.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	  const [isOpen, setIsOpen] = useState(false);
	
	  const toggleSidebar = () => {

		setIsOpen(!isOpen);
	  };

	  useEffect(()=>{},[isOpen])
	
	return (
		<html lang="en">
			<body>
			<div>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        aria-expanded={isOpen}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

	  <Sidebar isOpen={isOpen} />


      {/* Main Content */}
      <div className="p-4 sm:ml-64">
      <Navbar />
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
				{children}
        </div>
      </div>
    </div>
				</body>
		</html>
	)
}
