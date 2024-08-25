import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Image from "next/image"

const Page = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* leftMenu */}
      <div className="hidden xl:block xl:w-[20%]">
        <LeftMenu type="profile"/>
      </div>
      {/* middle or stories */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src="https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg?auto=compress&cs=tinysrgb&w=600" alt= "" fill className="object-cover rounded-md"/>
              <Image src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt= "" width={128} height={128} className="object-cover rounded-full absolute right-0 left-0 m-auto -bottom-16 ring-4 ring-white"/>
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Ayush Bhandari</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1k</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">13k</span>
                <span className="text-sm">Followings</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* rightMenu*/}
      <div className="hidden lg:block lg:w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  )
}

export default Page