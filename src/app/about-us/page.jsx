"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AboutUsPage() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Hardcoded list of positions for the authors
  const expertiseList = ["Blog Writer", "Language Educator", "Cultural Expert"];

  const handleGetAuthors = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=3");
      setAuthors(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAuthors();
  }, []);

  return (
    <section className="bg-[#1A1A2E] text-white py-16 pt-[100px]">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#E94560] mb-4">
            About Us
          </h1>
          <p className="text-xl text-white">
            Our mission is to help you unlock the beauty of the Japanese
            language and culture through engaging, fun, and effective learning
            resources.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#E94560] mb-6 text-center">
            Who We Are
          </h2>
          <p className="text-white text-lg leading-relaxed mb-4">
            {` We are a passionate group of language enthusiasts, educators, and
            Japanese culture aficionados dedicated to helping you succeed in
            learning Japanese. Whether you’re just starting or aiming to master
            advanced concepts, we’re here to guide you every step of the way.`}
          </p>
          <p className="text-white text-lg leading-relaxed mb-8">
            {`Our goal is simple: to make learning Japanese fun, accessible, and
            engaging for all learners. From foundational grammar and vocabulary
            to cultural insights, we believe that learning a language is not
            just about mastering words—it's about embracing a whole new culture.`}
          </p>

          {/* Author Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {loading ? ( // Show loading spinner while data is being fetched
              <div className="col-span-3 flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              authors.map((author, index) => (
                <div
                  key={index}
                  className="bg-[#2A2A40] p-6 rounded-lg shadow-md text-center"
                >
                  <img
                    src={author.picture.large}
                    alt={`${author.name.first} ${author.name.last}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#E94560]">
                    {`${author.name.first} ${author.name.last}`}
                  </h3>
                  <p className="text-white text-sm mt-2">
                    {expertiseList[index]} {/* Display hardcoded position */}
                  </p>
                  <p className="text-white text-sm mt-2">{author.email}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Brief History Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#E94560] mb-6 text-center">
            Our Journey
          </h2>
          <p className="text-white text-lg leading-relaxed mb-4">
            Our blog began in 2020 as a small passion project by a group of
            language enthusiasts who shared a deep love for Japanese culture.
            What started as a simple platform to share grammar tips and
            vocabulary lists quickly grew into a thriving community of learners
            from all over the world.
          </p>
          <p className="text-white text-lg leading-relaxed mb-4">
            {`Over the years, we’ve expanded our content to include cultural
            insights, interactive learning tools, and resources tailored for
            learners of all levels. Our mission has always been to make Japanese
            learning accessible, fun, and meaningful.`}
          </p>
          <p className="text-white text-lg leading-relaxed">
            {`Today, we’re proud to have helped thousands of learners on their
            journey to mastering Japanese. Whether you’re here to prepare for a
            trip to Japan, connect with its culture, or simply challenge
            yourself, we’re excited to be part of your story.`}
          </p>
        </div>

        {/* Our Philosophy Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#E94560] mb-6 text-center">
            Our Philosophy
          </h2>
          <p className="text-white text-lg leading-relaxed mb-4">
            We believe that language learning should be an exciting and
            fulfilling journey. We embrace a holistic approach that not only
            focuses on grammar and vocabulary but also immerses learners in the
            rich cultural context that shapes the Japanese language.
          </p>
          <p className="text-white text-lg leading-relaxed">
            {`Whether you’re learning Japanese for travel, business, or personal
            interest, our content is designed to help you achieve fluency in a
            way that’s both practical and enjoyable.`}
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#E94560] text-center mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
                Grammar Guides
              </h3>
              <p className="text-[#0F3460] text-sm">
                Master Japanese sentence structure and grammar with
                easy-to-understand explanations and examples.
              </p>
            </div>

            <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
                Vocabulary
              </h3>
              <p className="text-[#0F3460] text-sm">
                Build a robust vocabulary with curated word lists, flashcards,
                and practical tips to use in real conversations.
              </p>
            </div>

            <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
                Cultural Insights
              </h3>
              <p className="text-[#0F3460] text-sm">
                Dive deeper into the Japanese culture, traditions, and history
                to enrich your language learning experience.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 bg-[#1A1A2E] text-[#E94560] py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-white mb-8">
              We make Japanese learning fun, engaging, and accessible to
              everyone. Our goal is to empower you to become confident in
              speaking, reading, and understanding Japanese, no matter your
              level.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#E94560] hover:bg-[#1A1A2E] rounded-lg transition duration-300 ease-in-out"
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
