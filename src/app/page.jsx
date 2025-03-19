"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { TbTextGrammar } from "react-icons/tb";
import { TbLanguageHiragana } from "react-icons/tb";
import { LiaPaintBrushSolid } from "react-icons/lia";

export default function Home() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch blog posts
  const handleGetBlog = async () => {
    try {
      const response = await axios.get(`/api/blogs`);
      setBlog(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetBlog();
  }, []);

  // Get the most recent 3 blog posts
  const recentPosts = blog.slice(0, 3);
  return (
    <>
      <div className="h-full w-screen pt-[65px]">
        <div>
          {/* 210052 
          18003C*/}
          <section className="bg-[#1A1A2E] ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  Pera Pera Nihongo
                </h1>
                <p className="max-w-2xl mb-6 font-light text-white opacity-70 lg:mb-8 md:text-lg lg:text-xl ">
                  {`Welcome to Pera Pera Nihongo! Whether you're a beginner starting with`}{" "}
                  <br />
                  {`こんにちは (Konnichiwa) or an advanced learner mastering kanji, this blog is your go-to resource for all things Japanese. From grammar tips and vocabulary hacks to cultural insights and language challenges, we’re here to make your journey to fluency fun, effective, and inspiring. Let’s explore the beauty of the Japanese language together—one word at a time!`}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-bl-hover hover:bg-[#1A1A2E] focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
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
              <div className="hidden ml-10 lg:mt-0 lg:col-span-5 lg:flex relative h-100 w-100 ">
                <Image
                  src="/people-reading-books-study-vector-illustration.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-white text-black">
        {/* Recent Posts Section */}
        <div className="bg-white text-black py-8 px-4 max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-xl"></span>
              </div>
            ) : (
              recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-6 rounded-lg shadow-xl "
                >
                  {/* Post Metadata */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">By {post.author || "Admin"}</span>
                    <span>{new Date(post.created).toLocaleDateString()}</span>
                  </div>

                  {/* Post Title */}
                  <Link href={`/blogs-page/blog-post/${post.objectId}`}>
                    <h3 className="text-xl font-semibold text-[#0F3460] mb-4 hover:text-[#E94560] transition duration-300">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Post Excerpt */}
                  <p className="text-[#0F3460] text-sm mb-4">{post.excerpt}</p>
                </div>
              ))
            )}
          </div>

          {/* View All Posts Button */}
          <div className="mt-12 text-center">
            <Link href="/blogs-page">
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#E94560] hover:bg-[#1A1A2E] rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                View All Posts
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
              </button>
            </Link>
          </div>
        </div>
        {/* Popular Categories Section */}
        <div className="bg-white text-black">
          <div className="max-w-screen-xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-extrabold mb-8">Popular Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Grammar */}
              <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto">
                  <TbTextGrammar className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
                  Grammar
                </h3>
                <p className="text-[#0F3460] text-sm">
                  Master Japanese sentence structure and grammar with
                  easy-to-understand explanations and examples.
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
                  Build a robust vocabulary with curated word lists, flashcards,
                  and practical tips for real conversations.
                </p>
              </div>

              {/* Kanji */}
              <div className="bg-[#A8D8EA] p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto">
                  <LiaPaintBrushSolid className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F3460] mb-4">
                  Kanji
                </h3>
                <p className="text-[#0F3460] text-sm">
                  Learn to read and write kanji with step-by-step guides and
                  exercises for all levels.
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-12 text-center">
              <Link href="/categories">
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#E94560] hover:bg-[#1A1A2E] rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                  Explore All Categories
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
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* newsletter */}
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">
                {`Master Japanese, One Step at a Time – Get Tips, Lessons, and
                Exclusive Content Straight to Your Inbox!`}
              </p>
              <form>
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-bl-hover hover:bg-[#e1426c] border-[#e1426c] sm:rounded-none sm:rounded-r-lg hover:bg-primary-200 focus:ring-4 focus:ring-primary-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">
                  We care about the protection of your data.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
