import PageHeader from "../components/header/PageHeader";
import NotFound from "../icons/NotFound";

function NotFoundPage() {
  return (
    <div className="flex justify-center flex-wrap">
      <PageHeader />
      <div className="h-fit min-h-[400px] z-0 pt-[104px] absolute w-full bg-[url('/src/pictures/Home.png')] bg-cover bg-center flex justify-center flex-wrap">
        <div className="font-bold text-[#FD3939] text-[30px] w-full pt-[30px] flex items-center justify-center sm:pb-0 pb-[800px]">
          PAGE NOT FOUND
        </div>
        <div className="sm:flex justify-center hidden pb-[100px]">
          <NotFound />
        </div>
        <div className="bg-[#D9D9D9] h-[100px] relative w-full bottom-0"></div>
      </div>
    </div>
  );
}

export default NotFoundPage;
