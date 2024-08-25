import Link from "next/link"
import ProfileCard from "./ProfileCard"
import Image from "next/image"
import Ad from "./Ad"

const LeftMenu = ({type}:{type:"home"|"profile"}) => {
  return (
    <div className='flex flex-col gap-6'>
      {type=="home"&& <ProfileCard/>}
      <div className="flex flex-col  text-gray-500  shadow-md rounded-lg text-sm gap-2  p-4 bg-white">
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/posts.png"alt="posts" width={20} height={20}/>
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/activity.png"alt="posts" width={20} height={20}/>
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/market.png"alt="posts" width={20} height={20}/>
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/events.png"alt="posts" width={20} height={20}/>
          <span>Events</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/albums.png"alt="posts" width={20} height={20}/>
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/videos.png"alt="posts" width={20} height={20}/>
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/news.png"alt="posts" width={20} height={20}/>
          <span>News</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/courses.png"alt="posts" width={20} height={20}/>
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/lists.png"alt="posts" width={20} height={20}/>
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-sm  hover:bg-slate-100">
          <Image src="/settings.png"alt="posts" width={20} height={20}/>
          <span>Settings</span>
        </Link>
        <hr className="border-t-1 w-32 self-center border-gray-200 "></hr>
      </div>
      <Ad size="sm"/>
    </div>
  )
}

export default LeftMenu