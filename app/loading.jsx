"use client";

import React, { useEffect, useState } from "react";
import Tilter from "./components/generic/Tilter";

const randomQuotes = [
  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    author: "Bill Gates",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Technology is anything that wasn't around when you were born.",
    author: "Alan Kay",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
    author: "Bill Gates",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The internet is becoming the town square for the global village of tomorrow.",
    author: "Bill Gates",
  },
  {
    quote:
      "We are stuck with technology when what we really want is just stuff that works.",
    author: "Douglas Adams",
  },
  {
    quote:
      "I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.",
    author: "Bill Gates",
  },
  {
    quote:
      "The art challenges the technology, and the technology inspires the art.",
    author: "John Lasseter",
  },
  {
    quote: "Technology is a useful servant but a dangerous master.",
    author: "Christian Lous Lange",
  },
  {
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    quote:
      "The internet could be a very positive step towards education, organization, and participation in a meaningful society.",
    author: "Noam Chomsky",
  },
  {
    quote: "The human spirit must prevail over technology.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    author: "Tim Berners-Lee",
  },
  {
    quote: "It's not that we use technology, we live technology.",
    author: "Godfrey Reggio",
  },
  {
    quote: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    quote:
      "Computers are magnificent tools for the realization of our dreams, but no machine can replace the human spark of spirit, compassion, love, and understanding.",
    author: "Louis V. Gerstner, Jr.",
  },
  {
    quote:
      "The machine does not isolate man from the great problems of nature but plunges him more deeply into them.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "Our technology forces us to live mythically.",
    author: "Marshall McLuhan",
  },
  {
    quote:
      "Innovation is taking two things that already exist and putting them together in a new way.",
    author: "Tom Freston",
  },
  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    author: "Bill Gates",
  },
  {
    quote:
      "Technology is a word that describes something that doesn't work yet.",
    author: "Douglas Adams",
  },
  {
    quote:
      "The art challenges the technology, and the technology inspires the art.",
    author: "John Lasseter",
  },
  {
    quote: "Technology is a useful servant but a dangerous master.",
    author: "Christian Lous Lange",
  },
  {
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    quote:
      "The internet could be a very positive step towards education, organization, and participation in a meaningful society.",
    author: "Noam Chomsky",
  },
  {
    quote: "The human spirit must prevail over technology.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    author: "Tim Berners-Lee",
  },
  {
    quote: "It's not that we use technology, we live technology.",
    author: "Godfrey Reggio",
  },
  {
    quote: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    quote:
      "Computers are magnificent tools for the realization of our dreams, but no machine can replace the human spark of spirit, compassion, love, and understanding.",
    author: "Louis V. Gerstner, Jr.",
  },
  {
    quote:
      "The machine does not isolate man from the great problems of nature but plunges him more deeply into them.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "Our technology forces us to live mythically.",
    author: "Marshall McLuhan",
  },
  {
    quote:
      "Innovation is taking two things that already exist and putting them together in a new way.",
    author: "Tom Freston",
  },
  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    author: "Bill Gates",
  },
  {
    quote:
      "Technology is a word that describes something that doesn't work yet.",
    author: "Douglas Adams",
  },
  {
    quote:
      "The art challenges the technology, and the technology inspires the art.",
    author: "John Lasseter",
  },
  {
    quote: "Technology is a useful servant but a dangerous master.",
    author: "Christian Lous Lange",
  },
  {
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    quote:
      "The internet could be a very positive step towards education, organization, and participation in a meaningful society.",
    author: "Noam Chomsky",
  },
  {
    quote: "The human spirit must prevail over technology.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    author: "Tim Berners-Lee",
  },
  {
    quote: "It's not that we use technology, we live technology.",
    author: "Godfrey Reggio",
  },
  {
    quote: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
  {
    quote:
      "Computers are magnificent tools for the realization of our dreams, but no machine can replace the human spark of spirit, compassion, love, and understanding.",
    author: "Louis V. Gerstner, Jr.",
  },
  {
    quote:
      "The machine does not isolate man from the great problems of nature but plunges him more deeply into them.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "Our technology forces us to live mythically.",
    author: "Marshall McLuhan",
  },
  {
    quote:
      "Innovation is taking two things that already exist and putting them together in a new way.",
    author: "Tom Freston",
  },
];

const LoadingPage = () => {
  const [randomQuote, setRandomQuote] = useState(randomQuotes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    const randomQuote = randomQuotes[randomIndex];
    setRandomQuote(randomQuote);
  }, []);
  return (
    <div className="flex flex-col w-full items-center justify-center mx-auto p-6 lg:p-32 overflow-clip">
      <Tilter>
        <div className="w-auto h-1/2 mx-auto bg-base-300 border-2 text-center border-primary/30 p-5 rounded-xl">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
            className="w-10 h-10 mx-auto text-secondary"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className="text-lg mt-3 mb-2 font-bold">{randomQuote?.quote}</p>
          <p className="text-sm flex text-accent justify-center items-center gap-2">
            <span className="w-10 h-px bg-accent" />
            <span>{randomQuote?.author}</span>
          </p>
        </div>
      </Tilter>
    </div>
  );
};

export default LoadingPage;
