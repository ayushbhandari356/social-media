import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between  ">
      {/* left */}
      <div className="sm:w-[40] md:hidden lg:block lg:w-[20%] ">
        <Link href="/" className="font-bold text-xl text-blue-600">
          Seebook
        </Link>
      </div>
      {/* center */}
      <div className=" hidden md:flex w-[50%] items-center justify-between">
        {/* Links */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="home"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center  gap-2">
            <Image
              src="/friends.png"
              alt="home"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center  gap-2">
            <Image
              src="/stories.png"
              alt="home"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 item-center justify-center rounded-xl ml-6 pl-4 pr-4 ">
            <input type="text" placeholder="search..." className="bg-transparent outline-none" />
            <Image src="/search.png" alt="search" width={22} height={14} className=""/>
        </div>
      </div>
      {/* right */}
      <div className="w-[60%] flex items-center gap-4 xl:gap-8 justify-end md:w-[30%] ">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            {/* <span className="!absolute !-m-px !h-px !w-px  !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span> */}
          </div>
            {/* <span>Loading...</span> */}
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
                <Image src="/people.png" alt="signed in" width={24} height={24}/>
            </div>
            <div className="cursor-pointer">
                <Image src="/messages.png" alt="signed in" width={20} height={20}/>
            </div>
            <div className="cursor-pointer">
                <Image src="/notifications.png" alt="signed in" width={20} height={20}/>
            </div>
            <UserButton/>

          </SignedIn>
          <SignedOut>
            <div className="flex  item-center  gap-2 text-sm">
                <Image src="/login.png" alt="signed out" width={26} height={20}/>
                <Link href="/sign-in"className="text-gray-600 flex items-center ">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
