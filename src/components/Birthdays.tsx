import Image from "next/image"
import Link from "next/link"

const Birthdays = () => {
  return (
    <div className='p-4 shadow-md rounded-lg bg-white text-sm flex flex-col gap-4'>
         {/* top */}
         <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Birthdays</span>
            
        </div>
        {/* Users */}
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <Image src="https://images.pexels.com/photos/27596282/pexels-photo-27596282/free-photo-of-a-woman-standing-on-top-of-a-circular-platform.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-semibold">Chanky</span>
            </div>
            <div className="flex gap-3 justify-end">
                <button className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm">Celebrate</button>
            </div>
        </div>
        {/* upcomming */}
        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-sm">
            <span className="text-gray-700 font-semibold">Upcomming BIrthdays</span>
            <span className="text-gray-500">See other 10 have upcomming birthdays</span>
        </Link>
        </div>
       
    </div>
  )
}

export default Birthdays