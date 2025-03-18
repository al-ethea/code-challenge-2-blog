"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Unique categories for filtering
const categories = [
  "All",
  "Grammar",
  "Vocabulary",
  "Culture",
  "Kanji",
  "Practice",
  "Resources",
];

export default function BlogsPage() {
  const [blog, setBlog] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); // Loading state

  const handleGetBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs`
      );
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

  // Filter posts based on search query and category
  const filteredPosts = blog.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="bg-[#1A1A2E] text-white py-16 pt-[100px]">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-[#E94560] mb-4">
              Blog Posts
            </h1>
            <p className="text-xl text-white">
              Explore our collection of articles on Japanese language and
              culture.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#2A2A40] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E94560]"
            />
          </div>

          {/* Categories Section */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar (Visible on Desktop) */}
            <div className="hidden lg:block w-full lg:w-1/4">
              <h2 className="text-2xl font-bold text-[#E94560] mb-4">
                Categories
              </h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer p-2 rounded-lg ${
                      selectedCategory === category
                        ? "bg-[#E94560] text-white"
                        : "bg-[#2A2A40] hover:bg-[#3A3A50]"
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category Dropdown (Visible on Mobile) */}
            <div className="lg:hidden mb-8">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select select-bordered w-full bg-[#2A2A40] text-white focus:outline-none focus:ring-2 focus:ring-[#E94560]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* List of Posts */}
            <div className="w-full lg:w-3/4">
              {loading ? ( // Show loading spinner while data is being fetched
                <div className="flex justify-center items-center h-64">
                  <span className="loading loading-spinner loading-xl"></span>
                </div>
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white p-6 rounded-lg shadow-md mb-6"
                  >
                    <Link href={`/blogs-page/blog-post/${post.objectId}`}>
                      <h2 className="text-2xl font-bold text-[#E94560] mb-2 hover:text-[#1A1A2E] hover:underline transition-all duration-300">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-[#2A2A40] text-sm mb-2">
                      By <span className="font-semibold">{post.author}</span> |{" "}
                      {new Date(post.created).toLocaleDateString()}
                    </p>
                    <p className="text-[#2A2A40] text-sm mb-4">
                      {post.category}
                    </p>
                    <p className="text-[#2A2A40] text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-white text-lg">No posts found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
