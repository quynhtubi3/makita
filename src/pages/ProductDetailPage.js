import { Link, useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/header/PageHeader";
import { Col, Image, Row } from "antd";
import Back from "../icons/Back";
import HeartIcon from "../icons/HeartIcon";
import DownArrow from "../icons/DownArrow";
import ProductCard from "../components/ProductCard";
import MultiArrowRight from "../icons/MultiArrowRight";
import TickIcon from "../icons/TickIcon";

function ProductDetailPage() {
  const id = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="w-full">
      <PageHeader index={2} />
      <div className="h-fit z-0 pt-[104px] w-full bg-[url('/src/pictures/Home.png')] bg-cover bg-center flex justify-center flex-wrap">
        <Row
          gutter={8}
          className="pt-[20px] justify-between w-[80%] h-fit pb-[100px] max-w-[2000px]"
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="flex md:justify-start justify-center flex-wrap h-fit"
          >
            <div className="w-full flex justify-start h-[40px]">
              <span
                className="pl-[20px] font-bold hover:scale-105 transition-all cursor-pointer md:text-[20px] text-[16px] flex justify-between items-center"
                onClick={handleBackClick}
              >
                <Back />
                <div className="pl-1">Quay lại</div>
              </span>
            </div>
            <div className="bg-[#FD3939] mx-[40px] sm:mx-0 w-auto h-[350px] sm:h-[520px] max-w-[520px] rounded-[4px] flex justify-center items-center mt-[20px]">
              <div className="bg-[#FFFFFF] w-auto mx-[10px] h-[330px] sm:w-[700px] sm:h-[500px] rounded-[4px] flex justify-center items-center">
                <Image width={280} height={330} />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className="flex justify-center pt-[80px] flex-wrap">
              <div className="flex justify-center w-[50%] flex-wrap h-[60px]">
                <div className="w-full flex justify-end lg:text-[40px] text-[30px] font-bold">
                  Name
                </div>
                <div className="w-full flex justify-end lg:text-[20px] text-[16px]">
                  Description
                </div>
              </div>
              <div className="lg:pt-[200px] pt-[60px] flex justify-end flex-wrap w-[60%]">
                <div className="w-full flex justify-end font-bold line-through xl:text-[28px] text-[20px]">
                  1.000.000 VNĐ
                </div>
                <div className="w-full flex justify-end font-bold text-[#FD3939] xl:text-[28px] text-[20px]">
                  2.000.000 VNĐ
                </div>
              </div>
              <div className="pt-[40px] flex justify-center items-center w-[100%]">
                <div className="flex justify-center sm:justify-end sm:w-[60%] w-full">
                  <button className="w-fit h-[45px] rounded-[25px] bg-white border-[2px] text-[#FD3939] border-[#FD3939] flex items-center justify-center hover:bg-[#FD3939] hover:text-white transition-all hover:scale-105 font-bold cursor-pointer">
                    <div className="xl:text-[18px] sm:text-[16px] px-[20px]">Thêm vào giỏ hàng</div>
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <div className="w-full justify-start pt-[100px]">
            <div className="flex justify-center flex-wrap max-w-[2000px] mx-auto">
              <div className="font-bold text-[20px] w-[100%] justify-start flex mt-[30px] text-[#FD3939]">
                <div className="flex justify-start items-center">
                  <div className="pr-[6px]">Sản phẩm tương tự</div>
                </div>
              </div>
              <div className="overflow-auto flex min-h-[300px] items-center w-[100%] justify-start no-scrollbar">
                {Array.from({ length: 14 }, () => (
                  <div className="px-[10px]">
                    <ProductCard />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Row>
        <div className="bg-[#D9D9D9] h-[100px] relative w-full bottom-0"></div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
