import HeartIcon from "../icons/HeartIcon";
import TempPic from "../pictures/TempPic";

export default function ProductCard() {
  return (
    <div className="bg-[#FD3939] w-[200px] h-[260px] rounded-[4px] flex justify-center items-center hover:bg-[#FCA4A4] hover:scale-105 transition-all">
      <div className="bg-[#FFFFFF] w-[180px] h-[240px] rounded-[4px] flex justify-center flex-wrap">
        <div className="flex justify-center pt-[4px] flex-wrap w-full">
          <TempPic />
          <hr className="w-[90%] border-[3px] border-[#F5F5F5]" />
        </div>
        <div className="w-[90%]">
          <div className="flex justify-start text-[16px] font-bold">Name</div>
          <div className="flex justify-between text-[16px]">1.000.000VND 
            <div><HeartIcon /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
