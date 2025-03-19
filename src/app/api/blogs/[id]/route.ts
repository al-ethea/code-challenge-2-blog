import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";

// Interface for the expected BlogPost structure
interface BlogPost {
  objectId: string;
  title: string;
  content: string;
  category: string;
  author: string;
  created: Date;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<BlogPost | { error: string }>> {
  try {
    const { id } = params;

    // Fetch the blog post by ID from Backendless
    const findBlogById = await Backendless.Data.of("blogs").findById(id);

    // If no blog post is found, return a 404 error
    if (!findBlogById) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    // Assuming the Backendless object has fields `objectId`, `title`, and `content`
    const blogPost: BlogPost = {
      objectId: (findBlogById as BlogPost).objectId ?? "", // Ensure you use the correct property
      title: (findBlogById as BlogPost).title ?? "Untitled", // Use a fallback if necessary
      content: (findBlogById as BlogPost).content ?? "No content available",
      category: (findBlogById as BlogPost).category,
      author: (findBlogById as BlogPost).author,
      created: (findBlogById as BlogPost).created,
    };

    // Return the blog post as JSON with a 200 status
    return NextResponse.json(blogPost, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog post:", error);

    // Determine the error message, fallback to a generic one if necessary
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    // Return the error message as JSON with a 500 status
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
