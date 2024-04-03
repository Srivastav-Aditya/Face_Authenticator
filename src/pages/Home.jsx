import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-900 py-40 h-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 mb-4">
            Welcome to the Face Recognition App
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto">
            Developed by Aditya Srivastava
          </p>
        </div>
        <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto mb-12">
          This app uses face recognition to tag faces in live webcam feed,
          showcasing full-stack dev and AI integration for seamless UX.
        </p>
        <div className="flex justify-center">
          <Link
            to="/user-select"
            className="flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-blue-300 to-yellow-500 text-white hover:from-yellow-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-yellow-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
            <span className="text-xl font-bold">Log In Using Face Recognition</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
