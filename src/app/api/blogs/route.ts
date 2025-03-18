import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const fetchBlog = await Backendless.Data.of("blogs").find();
    // console.log(fetchBlog);

    return NextResponse.json(
      { message: "Blog Found", data: fetchBlog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Blog not found", error },
      { status: 500 }
    );
  }
}
