import React from "react";
import { TbTextGrammar } from "react-icons/tb";
import { TbLanguageHiragana } from "react-icons/tb";
import { LiaPaintBrushSolid } from "react-icons/lia";
import { LuNotebookPen } from "react-icons/lu";
import { GiTwirlyFlower } from "react-icons/gi";
import { IoLibrary } from "react-icons/io5";

export default function CategoriesPage() {
  return (
    <section className="bg-[#1A1A2E] text-white py-16 pt-[100px]">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#E94560] mb-4">
            Explore Japanese Learning Topics
          </h1>
          <p className="text-xl text-white">
            Dive into various aspects of the Japanese language and culture, from
            basic grammar to advanced kanji. Explore topics designed to help you
            improve your Japanese skills.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Grammar */}
          <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto">
              <TbTextGrammar className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
              Grammar
            </h3>
            <p className="text-[#0F3460] text-sm">
              Learn the fundamental building blocks of Japanese sentence
              structure, from particles to sentence types, and improve your
              communication skills.
            </p>
          </div>

          {/* Vocabulary */}
          <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-green-600 mx-auto">
              <TbLanguageHiragana className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
              Vocabulary
            </h3>
            <p className="text-[#0F3460] text-sm">
              Build a strong Japanese vocabulary with essential words and
              phrases to help you navigate daily conversations and understand
              native materials.
            </p>
          </div>

          {/* Kanji */}
          <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto">
              <LiaPaintBrushSolid className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F3460] mb-4">Kanji</h3>
            <p className="text-[#0F3460] text-sm">
              Master the art of reading and writing kanji with step-by-step
              guides and exercises. Start with basic kanji and advance to more
              complex characters.
            </p>
          </div>

          {/* Culture */}
          <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 mx-auto">
              <GiTwirlyFlower className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
              Culture
            </h3>
            <p className="text-[#0F3460] text-sm">
              {`Learn about Japan's rich culture, traditions, and history. From
              festivals to etiquette, understand the context behind the
              language.`}
            </p>
          </div>

          {/* Practice */}
          <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mx-auto">
              <LuNotebookPen className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
              Practice
            </h3>
            <p className="text-[#0F3460] text-sm">
              Enhance your Japanese skills through practice exercises, quizzes,
              and conversation prompts. Put your learning into action!
            </p>
          </div>

          {/* Resources */}
          <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 mx-auto">
              <IoLibrary className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
              Resources
            </h3>
            <p className="text-[#0F3460] text-sm">
              Access a variety of tools and materials like apps, books,
              websites, and podcasts that will help you in your Japanese
              learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
