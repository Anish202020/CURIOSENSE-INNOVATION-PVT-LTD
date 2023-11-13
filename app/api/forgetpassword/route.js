import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password,newpassword } = await req.json();
    const hashedNewPassword = await bcrypt.hash(newpassword, 10);
    await connectMongoDB();
    await User.updateOne({  email, password: hashedNewPassword });

    
    return NextResponse.json({ message: "User Password Updated." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}