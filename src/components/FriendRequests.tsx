import Image from "next/image"
import Link from "next/link"

const FriendRequests = () => {
  return (
    <div className='p-4 shadow-md rounded-lg bg-white text-sm flex flex-col gap-4'>
        {/* top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Requests</span>
            <Link href="/" className="text-blue-500 text-sm">See all</Link>
        </div>
        {/* Users */}
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <Image src="https://images.pexels.com/photos/27596282/pexels-photo-27596282/free-photo-of-a-woman-standing-on-top-of-a-circular-platform.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-semibold">Chanky</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <Image src="https://images.pexels.com/photos/27596282/pexels-photo-27596282/free-photo-of-a-woman-standing-on-top-of-a-circular-platform.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-semibold">Chanky</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <Image src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-semibold">Chanky</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}

export default FriendRequests