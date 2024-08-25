import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/25524306/pexels-photo-25524306/free-photo-of-man-in-black-clothing-posing-in-tall-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex gap-2 justify-between items-center bg-slate-100 rounded-xl text-sm px-5 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment ..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=" "
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* see comments */}
      <div className="">
        {/* comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* avatar */}
          <Image
            src="https://images.pexels.com/photos/25524306/pexels-photo-25524306/free-photo-of-man-in-black-clothing-posing-in-tall-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=" "
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* desc*/}
          <div className="flex flex-col gap-3 flex-1">
            <span className="font-medium">Aman Bhatt</span>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis minus facere, saepe odit libero reprehenderit
              voluptate eum vel reiciendis modi atque distinctio omnis sint
              velit provident numquam maxime! Delectus, molestias. ayuhs
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/*icon */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
