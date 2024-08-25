import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white text-sm">
      {/* top */}
      <div className="font-medium flex justify-between items-center text-gray-500">
        <span className="">Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Japan Tourist Company</span>
        </div>
        <p className={size==="sm"?"text-xs":"text-sm"}>
        {
            size === "sm" ?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ullam." : size === "md" ?'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos incidunt quo ad sit amet vero nobis vitae odit ab!' :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni iure, rerum aspernatur alias debitis provident dolorem enim nulla repudiandae nobis possimus? Obcaecati ullam distinctio modi! Impedit corrupti eos porro."
          }
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-sm rounded-lg">Learn more</button>
      </div>
    </div>
  );
};

export default Ad;
