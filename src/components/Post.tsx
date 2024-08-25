import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Aditi</span>
        </div>
        <div className="">
          <Image src="/more.png" alt="" width={16} height={16} />
        </div>
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/2915957/pexels-photo-2915957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia
          odio corporis hic rerum, repellendus, veniam vitae maiores facilis
          odit dignissimos eum ea tenetur ducimus necessitatibus molestiae nam
          non, sapiente veritatis nobis ipsum accusantium. Ullam debitis dolores
          eveniet mollitia ut hic sint corporis provident. Cupiditate architecto
          voluptate ducimus at nulla?
        </p>
      </div>
      {/* interaction */}
      <div className="flex items-center justify-between gap-4 my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">likes</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">comments</span>
            </span>
          </div>
        </div>
        <div className="">
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">shares</span>
            </span>
          </div>
        </div>
      </div>
      {/* comments */}
      <Comments/>
    </div>
  );
};

export default Post;
