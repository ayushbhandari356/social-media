import Image from "next/image"

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
      <div className="h-20 relative">
        <Image src="https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="" fill className="rounded-md"/>
        <Image src="https://images.pexels.com/photos/26524779/pexels-photo-26524779/free-photo-of-man-in-white-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="" width={48} height={48} className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6  ring-1 ring-white z-10 "   />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <div className="font-semibold">Ayush bhandari</div>
        <div className="flex items-center gap-4">
          <div className="flex">
          <Image src="https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="" width={12} height={12} className="h-3 w-3 rounded-full object-cover"  />
          <Image src="https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="" width={12} height={12} className="h-3 w-3 rounded-full object-cover"  />
          <Image src="https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="" width={12} height={12} className="h-3 w-3 rounded-full object-cover"  />
          </div>
          <span className="text-xs to-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard   