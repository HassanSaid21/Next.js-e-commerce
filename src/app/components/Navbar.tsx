import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import Logo from "./Logo";
import ShoppingCartIcon from "./ShoppingCartIcon";
// import {  SignedIn, SignedOut, SignInButton  } from "@clerk/nextjs";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 pb-2">
      {/* Right  */}
      <Logo color="text-dark" />
      {/* left */}

      <div className="flex items-center gap-6">

        <SearchBar />
        <Link href='/'><Home className="w-4 h-4 text-gray-500" /></Link>
        <Bell  className="w-4 h-4 text-gray-500"/>
      <ShoppingCartIcon />
      
          {//! span should be replaced with clerk
            }
      <span className="font-semibold  text-gray-900 cursor-pointer ">Sign in</span>

    {/* <SignedOut>

      <SignInButton />
    </SignedOut>
    <SignedIn>
      <ProfileButton />
    </SignedIn> */}
      </div>
    </nav>
  );
};

export default Navbar;
