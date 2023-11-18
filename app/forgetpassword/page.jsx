import React from 'react'
import ForgetForm from '@/components/ForgetForm'
// import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


async function Forgetpassword() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");
  return (
    <div>
        <ForgetForm></ForgetForm>
    </div>
  )
}

export default Forgetpassword