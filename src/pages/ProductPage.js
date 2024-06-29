import { Col, Input, Pagination, Row } from "antd";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/header/PageHeader";
import DownArrow from "../icons/DownArrow";
import MultiArrowRight from "../icons/MultiArrowRight";
import SearchIcon from "../icons/SearchIcon";

function ProductPage() {
  return (
    <div>
      <PageHeader index={2} />
      <div className="z-0 pt-[104px] absolute w-full bg-[url('/src/pictures/Home.png')] bg-cover bg-center">
        <div className="flex justify-center flex-wrap max-w-[2000px] mx-auto bg-[#FFD3D3] pb-[20px]">
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
        </div>
        <div className="w-full flex justify-center pt-[20px] flex-wrap">
          <div className="w-[70%]">
            <Row gutter={8}>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                className="flex flex-wrap"
              >
                <div className="w-full flex justify-start font-bold text-[#FD3939] text-[20px] pl-[20px] pb-[10px]">
                  Danh mục
                </div>
                <div className="flex justify-start">
                  <div className="text-[#FCA4A4] hover:text-[#FD3939] px-[10px] cursor-pointer hover:scale-105 transition-all">
                    Yêu thích
                  </div>
                  <div className="text-[#FCA4A4] hover:text-[#FD3939] px-[10px] cursor-pointer hover:scale-105 transition-all">
                    Yêu thích
                  </div>
                  <div className="text-[#FCA4A4] hover:text-[#FD3939] px-[10px] cursor-pointer hover:scale-105 transition-all">
                    Yêu thích
                  </div>
                  <div className="text-[#FCA4A4] hover:text-[#FD3939] px-[10px] cursor-pointer hover:scale-105 transition-all">
                    Yêu thích
                  </div>
                  <div className="text-[#FCA4A4] hover:text-[#FD3939] px-[10px] cursor-pointer hover:scale-105 transition-all">
                    Yêu thích
                  </div>
                </div>
              </Col>
              <Col xs={22} sm={22} md={12} lg={12} xl={12}>
                <div className="w-full sm:justify-end flex justify-center pt-[20px]">
                  <div className="flex justify-center border-[2px] border-black items-center rounded-[24px]">
                    <div className="flex justify-between py-[4px] px-[12px]">
                      <Input placeholder="Tìm kiếm" variant="borderless" />
                      <div className="cursor-pointer">
                        <SearchIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="flex justify-center sm:w-[80%]">
            <div className="flex justify-center flex-wrap pt-[20px]">
              {Array.from({ length: 10 }, () => (
                <div className="sm:px-[10px] sm:py-[10px] px-[1px] py-[1px]">
                  <ProductCard />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:w-[80%] w-full pt-[20px] justify-end mb-[140px] flex">
          <Pagination defaultCurrent={1} total={10} />
        </div>
        <div className="bg-[#D9D9D9] h-[100px] absolute w-full bottom-0"></div>
      </div>
    </div>
  );
}

export default ProductPage;
