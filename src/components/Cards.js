import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { Link } from 'react-router-dom';

const Cards = () => {
  const cards = [
    {
      title: "I'm a designer looking to share my work",
      description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."
    },
    {
      title: "I'm looking to hire a designer",
      description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."
    },
    {
      title: "I'm looking for design inspiration",
      description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."
    }
  ];

  const Card = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCard = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div
        className={`mx-2 mt-5 mb-5 transition-all duration-500 ease-in-out rounded-lg border-4 ${
          isExpanded ? "h-96 md:h-auto border-pink-500" : "h-64 md:h-auto"
        } flex flex-col items-center justify-center md:max-w-sm`}
        style={{ width: "100%", cursor: "pointer" }}
        onClick={toggleCard}
      >
        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? "scale-85 -translate-y-10" : "scale-100"
          }`}
        >
          <img
            src="/card_image_1.png"
            alt="Design"
            className="w-full"
            style={{ height: "100%" }}
          />
        </div>
        <div
          className={`p-2 text-center transition-opacity duration-500 ease-in-out ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm m-2">{description}</p>
          <div className="flex justify-center mt-4">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <div className={`${isExpanded ? "hidden" : "block"}`}>
          <p className="text-center text-lg font-bold mt-2">{title}</p>
          <div className="flex justify-center mt-4">
            <svg
              className="w-6 h-6 text-grey-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="absolute top-0 left-0 m-4">
        <img src="/logo.png" alt="Logo" className="w-44 h-36" />
      </div>
      <Link to="/profile" className="absolute top-0 right-0 m-4">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">&lt;</button>
      </Link>
      <div className="mt-36">
        <h1 className="text-3xl font-bold text-center">What brings you to Dribbble?</h1>
        <h1 className="text-xl text-center text-gray-500">Select the options that best describe you. Don't worry, you can explore the other options later</h1>
        <div className="flex justify-center items-center flex-wrap">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/VerificationEmail">
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-8 rounded">
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
