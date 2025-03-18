import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";

// GET hanya utk menarik data, tdk bisa menyisipkan data melalui body
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    // console.log(id);

    const findBlogById = await Backendless.Data.of("blogs").findById(id);
    // console.log(findBlogById);

    return NextResponse.json(findBlogById, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch blog", error },
      { status: 500 }
    );
  }
}
