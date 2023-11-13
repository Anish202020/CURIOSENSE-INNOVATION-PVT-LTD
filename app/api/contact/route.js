import { connectMongoDB } from "@/lib/mongodb";

import Contact from "@/models/contact";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    
    await connectMongoDB();
    await Contact.create({ name, email, message });

    return NextResponse.json({ message: "Contact Details Received" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}