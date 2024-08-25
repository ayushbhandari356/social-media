import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({userId}:{userId:string}) => {
  return (
    <div className='p-4 shadow-md rounded-lg bg-white text-sm flex flex-col gap-4'>
        {/* top */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Media</span>
            <Link href="/" className="text-blue-500 text-sm">See all</Link>
        </div>
        {/* bottom */}
        <div className="flex gap-4 justify-between flex-wrap">
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className="object-cover rounded-md"/>
          </div>
        </div>
        
    </div>
  )
}

export default UserMediaCard