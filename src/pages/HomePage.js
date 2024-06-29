import { Carousel } from "antd";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/header/PageHeader";
import TickIcon from "../icons/TickIcon";
import MultiArrowRight from "../icons/MultiArrowRight";
import DownArrow from "../icons/DownArrow";


function HomePage() {
  return (
    <div className="flex justify-center flex-wrap">
      <PageHeader index={1} />
      <div className="h-[1500px] z-0 pt-[104px] absolute w-full bg-[url('/src/pictures/Home.png')] bg-cover bg-center">
        <Carousel autoplay>
          <div className="w-full h-[290px] bg-[#FFD3D3]"></div>
          <div className="w-full h-[290px] bg-[#7ed7f1]"></div>
          <div className="w-full h-[290px] bg-[#ffb6f3]"></div>
          <div className="w-full h-[290px] bg-[#fcfdbf]"></div>
        </Carousel>
        <div className="flex justify-center flex-wrap max-w-[2000px] mx-auto">
          <div className="font-bold text-[20px] w-[65%] justify-start flex mt-[30px] text-[#FD3939]">
            <div className="flex justify-start items-center">
              <div className="pr-[6px]">Sản phẩm mới</div>
              <TickIcon />
            </div>
          </div>
          <div className="overflow-auto flex min-h-[300px] items-center w-[69%] justify-start no-scrollbar">
            {Array.from({ length: 7 }, () => (
              <div className="px-[10px]">
                <ProductCard />
              </div>
            ))}
          </div>
          <div className="font-bold text-[16px] w-[65%] justify-end flex mt-[10px] text-[#FD3939]">
            <div className="flex justify-start items-center cursor-pointer hover:scale-105 transition-all">
              <div className="pr-[2px] pb-[4px]">Xem tất cả sản phẩm</div>
              <MultiArrowRight />
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap max-w-[2000px] mx-auto">
          <div className="font-bold text-[20px] w-[65%] justify-start flex mt-[30px] text-[#FD3939]">
            <div className="flex justify-start items-center">
              <div className="pr-[6px]">Giảm giá nhiều</div>
              <DownArrow />
            </div>
          </div>
          <div className="overflow-auto flex min-h-[300px] items-center w-[69%] justify-start no-scrollbar">
            {Array.from({ length: 7 }, () => (
              <div className="px-[10px]">
                <ProductCard />
              </div>
            ))}
          </div>
          <div className="font-bold text-[16px] w-[65%] justify-end flex mt-[10px] text-[#FD3939]">
            <div className="flex justify-start items-center cursor-pointer hover:scale-105 transition-all">
              <div className="pr-[2px] pb-[4px]">Xem tất cả sản phẩm</div>
              <MultiArrowRight />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] h-[100px] absolute w-full bottom-0"></div>
      </div>
    </div>
  );
}

export default HomePage;
