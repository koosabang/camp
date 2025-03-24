"use client"; // ทำให้แน่ใจว่าโค้ดนี้รันฝั่ง Client
import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs"


const SignOutLinks = () => {
  const handleLogout = () => {
    toast("Signed Out", {
      description: "You have successfully signed out.",
     
    });
  } 
  return (
    <SignOutButton redirectUrl="/">
    <button
      className="w-full text-left"
      onClick={handleLogout}
    >
      Logout
    </button>
    </SignOutButton >

  );
};

export default SignOutLinks;
