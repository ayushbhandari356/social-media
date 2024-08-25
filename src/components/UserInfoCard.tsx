import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-lg text-black">Shreya Singh</span>
          <span className="text-sm">@shreya</span>
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto vero aliquam minus culpa autem?</p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16}/>
           <span className="">Living in <b>Augustyamuni</b></span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16}/>
           <span className="">Went to <b>Delhi public school</b></span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16}/>
           <span className="">Works in <b>Google</b></span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16}/>
            <Link href="https://ayushdev" className="text-blue-500 font-medium">ayushdev.com</Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16}/>
            <span className="">Joined April 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
        <span className="text-red-500 text-xs cursor-pointer self-end">Block User</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
