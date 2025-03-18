import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<BlogPost | { error: string }>> {
  try {
    const id = params.id;

    // Fetch the blog post by ID from Backendless
    const findBlogById = await Backendless.Data.of("blogs").findById(id);

    // Ensure the response matches the BlogPost interface
    if (!findBlogById) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Transform the response to match the BlogPost interface
    const blogPost: BlogPost = {
      id: findBlogById.objectId, // Use the correct property from Backendless
      title: findBlogById.title,
      content: findBlogById.content,
    };

    // Return the transformed blog post
    return NextResponse.json(blogPost, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog post:", error);

    // Convert the error to a string
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { error: errorMessage }, // Ensure the error is a string
      { status: 500 }
    );
  }
}
