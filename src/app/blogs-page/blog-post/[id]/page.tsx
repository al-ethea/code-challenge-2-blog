"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Interface for the expected BlogPost structure
interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  created: Date;
}

export default function Post() {
  const params = useParams(); // Get the slug ID from the URL
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true); // Loading state

  const handleGetPost = async () => {
    try {
      const response = await axios.get(`/api/blogs/${params.id}`);
      // console.log(response.data);
      setPost(response.data); // Set the fetched post data
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    handleGetPost();
  }, [params.id]); // Re-fetch data if the slug ID changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#1A1A2E]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (!post) {
    return <div className="text-center text-white py-16">Post not found.</div>;
  }

  return (
    <section className="bg-[#1A1A2E] text-white py-16 pt-[100px] h-full">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Blog Post Header */}
        <div className=" mb-12">
          <h1 className="text-4xl font-extrabold text-[#E94560] mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-white">
            By <span className="font-semibold">{post.author}</span> |{" "}
            {new Date(post.created).toLocaleDateString()}
          </p>
          <p className="text-xl text-white">Category: {post.category}</p>
        </div>

        {/* Blog Post Content */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="prose prose-lg max-w-none text-[#1A1A2E]">
            {post.content}
          </div>
        </div>
      </div>
    </section>
  );
}
