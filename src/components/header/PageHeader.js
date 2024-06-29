import { Link } from "react-router-dom";
import AlignIcon from "../../icons/AlignIcon";
import CloseIcon from "../../icons/CloseIcon";
import LocationIcon from "../../icons/LocationIcon";
import Logo from "../../icons/Logo";
import MailIcon from "../../icons/MailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import { useEffect, useState } from "react";
import Cookie from "js.cookie";
import { Button, Input, Modal, message } from "antd";
import { UserApi } from "../../Apis/UserApi";

function PageHeader({ index }) {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState({
    logIn: false,
    signUp: false,
  });
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });
  const [reload, setReload] = useState(false);

  const isLogged = Cookie.get("isLogged");

  const headerValue = {
    location: "HaNoi",
    emailAddress: "duongdd@gmail.com",
    phoneNumber: "0369901275",
    home: "Trang chủ",
    product: "Sản phẩm",
    cart: "Giỏ hàng",
    account: "Tài khoản",
  };

  const onHandleLogIn = () => {
    const res = UserApi.Login(userDetail);
    console.log(res);
    if (res === 1) {
      Cookie.set("isLogged", true);
      setVisible(false);
      setModal({ logIn: false });
      message.success("Đăng nhập thành công");
      setReload(!reload);
    } else {
      message.error("Sai tài khoản hoặc mật khẩu");
    }
  };
  const onHandleLogOut = () => {
    Cookie.set("isLogged", false);
    setVisible(false);
    message.warning("Đã đăng xuất");
    setReload(!reload);
  };

  useEffect(() => {
    setUserDetail({
      username: "",
      password: "",
    });
  }, [reload]);

  return (
    <div className="fixed top-0 z-50 w-full">
      <Modal
        open={modal.logIn}
        onCancel={() =>
          setModal({
            logIn: false,
          })
        }
        onClose={() =>
          setModal({
            logIn: false,
          })
        }
        title={<div>Đăng nhập</div>}
        footer={[
          <Button
            danger
            onClick={() =>
              setModal({
                logIn: false,
              })
            }
          >
            Hủy
          </Button>,
          <Button danger defaultValue={""}>
            Đăng ký
          </Button>,
          <Button
            danger
            defaultValue={""}
            type="primary"
            onClick={() => onHandleLogIn()}
          >
            Đăng nhập
          </Button>,
        ]}
      >
        <div>
          <div>Tên đăng nhập</div>
          <div>
            <Input
              value={userDetail.username}
              onChange={(event) =>
                setUserDetail((pre) => {
                  return { ...pre, username: event.target.value };
                })
              }
            ></Input>
          </div>
        </div>
        <div className="mb-[20px]">
          <div>Mật khẩu</div>
          <div>
            <Input.Password
              value={userDetail.password}
              onChange={(event) =>
                setUserDetail((pre) => {
                  return { ...pre, password: event.target.value };
                })
              }
            ></Input.Password>
          </div>
        </div>
      </Modal>
      <Modal
        open={modal.signUp}
        onCancel={() =>
          setModal({
            signUp: false,
          })
        }
        onClose={() =>
          setModal({
            signUp: false,
          })
        }
        title={<div>Đăng ký</div>}
        footer={[
          <Button
            danger
            onClick={() =>
              setModal({
                signUp: false,
              })
            }
          >
            Hủy
          </Button>,
          <Button danger type="primary">
            Đăng ký
          </Button>,
        ]}
      >
        <div>
          <div>Tên đăng nhập</div>
          <div>
            <Input required></Input>
          </div>
        </div>
        <div>
          <div>Mật khẩu</div>
          <div>
            <Input.Password></Input.Password>
          </div>
        </div>
        <div className="mb-[20px]">
          <div>Nhập lại mật khẩu</div>
          <div>
            <Input.Password></Input.Password>
          </div>
        </div>
      </Modal>
      <div className="bg-white flex justify-start w-full min-h-[24px]">
        <div className="flex items-center px-[10px]">
          <LocationIcon />
          <div className="text-[#C7C3C3] ml-[4px] font-bold lg:text-[16px] text-[12px]">
            {headerValue.location}
          </div>
        </div>
        <div className="flex items-center px-[10px]">
          <MailIcon />
          <div className="text-[#C7C3C3] ml-[4px] font-bold lg:text-[16px] text-[12px]">
            {headerValue.emailAddress}
          </div>
        </div>
        <div className="flex items-center px-[10px]">
          <PhoneIcon />
          <div className="text-[#C7C3C3] ml-[4px] font-bold lg:text-[16px] text-[12px]">
            {headerValue.phoneNumber}
          </div>
        </div>
      </div>
      <hr />
      <div
        className={`min-h-[80px] bg-white w-full flex justify-center items-center ${
          visible ? "" : "shadow-xl"
        }`}
      >
        <div className="w-full flex items-center justify-between max-w-[1248px]">
          <Link
            className="cursor-pointer ml-[10px] hover:scale-105 transition-all"
            to="/"
          >
            <Logo />
          </Link>
          <div className="lg:flex justify-between w-[40%] items-center hidden mr-[10px]">
            <Link
              className={`font-bold ${
                index === 1 ? "text-[#FD3939]" : "text-[#FCA4A4]"
              }  text-[20px] hover:text-[#FD3939] cursor-pointer font-sans hover:scale-105 transition-all`}
              to="/"
            >
              {headerValue.home}
            </Link>
            <Link
              className={`font-bold ${
                index === 2 ? "text-[#FD3939]" : "text-[#FCA4A4]"
              }  text-[20px] hover:text-[#FD3939] cursor-pointer font-sans hover:scale-105 transition-all`}
              to="/product"
            >
              {headerValue.product}
            </Link>
            {!isLogged ? (
              <></>
            ) : (
              <Link
                className={`font-bold ${
                  index === 3 ? "text-[#FD3939]" : "text-[#FCA4A4]"
                }  text-[20px] hover:text-[#FD3939] cursor-pointer font-sans hover:scale-105 transition-all`}
              >
                {headerValue.cart}
              </Link>
            )}

            {!isLogged ? (
              <div className="flex justify-between">
                <Button
                  danger
                  type="primary"
                  className="mr-[20px]"
                  onClick={() => setModal({ logIn: true })}
                >
                  Đăng nhập
                </Button>
                <Button
                  danger
                  type="default"
                  onClick={() => setModal({ signUp: true })}
                >
                  Đăng ký
                </Button>
              </div>
            ) : (
              <div className="hover:scale-105 transition-all">
                <ProfileIcon />
              </div>
            )}
          </div>
          <div
            className="lg:hidden flex transition-all mr-[10px]"
            onClick={() => setVisible(!visible)}
          >
            {visible ? <CloseIcon /> : <AlignIcon />}
          </div>
        </div>
      </div>
      <div
        className={`transition-all ${
          visible ? "" : "hidden"
        } shadow-xl pb-[10px] w-full bg-white`}
      >
        <div className="w-full flex items-center justify-end">
          <Link
            className={`font-bold ${
              index === 1 ? "text-[#FD3939]" : "text-[#FCA4A4]"
            } text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]`}
            to="/"
          >
            {headerValue.home}
          </Link>
        </div>
        <div className="w-full flex items-center justify-end">
          <Link
            className={`font-bold ${
              index === 2 ? "text-[#FD3939]" : "text-[#FCA4A4]"
            } text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]`}
            to="/product"
          >
            {headerValue.product}
          </Link>
        </div>
        {isLogged ? (
          <div className="w-full flex items-center justify-end">
            <Link
              className={`font-bold ${
                index === 3 ? "text-[#FD3939]" : "text-[#FCA4A4]"
              } text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]`}
              to="/"
            >
              {headerValue.cart}
            </Link>
          </div>
        ) : (
          <></>
        )}
        {isLogged ? (
          <div className="w-full flex items-center justify-end">
            <Link
              className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]"
              to="/"
            >
              {headerValue.account}
            </Link>
          </div>
        ) : (
          <></>
        )}

        <div className="w-full flex items-center justify-end">
          <div className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]"></div>
        </div>
        {isLogged ? (
          <div className="w-full flex items-center justify-end">
            <div
              className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]"
              onClick={() => onHandleLogOut()}
            >
              Đăng xuất
            </div>
          </div>
        ) : (
          <div>
            <div className="w-full flex items-center justify-end">
              <div
                className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]"
                onClick={() => setModal({ logIn: true })}
              >
                Đăng nhập
              </div>
            </div>
            <div className="w-full flex items-center justify-end">
              <div
                className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]"
                onClick={() => setModal({ signUp: true })}
              >
                Đăng ký
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
