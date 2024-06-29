import HeartIcon from "../icons/HeartIcon";
import TempPic from "../pictures/TempPic";

export default function ProductCard() {
  return (
    <div className="bg-[#FD3939] w-[180px] h-[240px] rounded-[4px] flex justify-center items-center hover:bg-[#FCA4A4] hover:scale-105 transition-all hover:shadow-md">
      <div className="bg-[#FFFFFF] w-[160px] h-[220px] rounded-[4px] flex justify-center flex-wrap">
        <div className="flex justify-center pt-[4px] flex-wrap w-full">
          <TempPic />
          <hr className="w-[90%] border-[3px] border-[#F5F5F5]" />
        </div>
        <div className="w-[90%]">
          <div className="flex justify-start text-[12px] font-bold">Name</div>
          <div className="flex justify-start text-[12px] line-through">1.000.000VND</div>
          <div className="flex justify-between text-[12px] text-[#FD3939] font-bold pb-[10px]">2.000.000VND 
            <div><HeartIcon /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
