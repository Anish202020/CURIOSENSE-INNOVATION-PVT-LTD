import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    await connectMongoDB();
    const {name,newname,email,newemail } = await req.json();


    console.log(name,email)
    const user = await User.findOne({ email }).select("_id");
    
    await User.findByIdAndUpdate(user, {name: newname,email:newemail })
    // await User.findByIdAndUpdate(id, { name: newname })
    
    
    // await User.updateOne({ name:newname, email:newemail});


    
    return NextResponse.json({ message: "User Password Updated." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}