import React from "react";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="text-black ">
      <p className="tracking-wide font-sans font-bold mx-6 mt-6 text-3xl">
        UNICUNGDI
      </p>
      <p className="mx-6 font-sans tracking-widest">
        UNIVERSITY LÀ CÙNG NHAU ĐI
      </p>
      <div className="flex">
        <img
          className="mx-16 transform scale-x-[-1] w-334 h-auto"
          src={process.env.PUBLIC_URL + "/images/wallpaper.jpg"}
          alt="Wallpaper"
        />
        <div className="mx-20 mt-15">
          <p className="tracking-wide font-sans font-bold text-5xl mx-16 mt-20">
            {" "}
            TẠO TÀI KHOẢN
          </p>
          <p className="font-sans font-semibold mt-3 mx-5">
            Vui lòng nhập địa chỉ email của ngôi trường bạn đang theo học
          </p>
          <div className="relative mt-5">
            <input
              className="border-2 rounded-l-lg w-full h-12 pl-10 ring-2 ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
              style={{ backdropFilter: "blur(7.61834192276001px)" }}
              type="text"
              placeholder="user@school.edu.vn"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <IoMdMail color="gray" height="24px" width="24px" />
            </div>
          </div>
          <Link to="/signup2">
            <button className="bg-blued text-white w-80 h-14 mx-28 mt-6 rounded-xl">
              Tạo tài khoản
            </button>
          </Link>
          <hr className="w-2/3 mx-16 h-px my-8 bg-black border-0 rounded dark:bg-black" />
          <div className="  mx-32">
            <p className="font-sans font-semibold">
              Đã có tài khoản?{" "}
              <Link to="/login">
                <span className="text-blued">Đăng nhập ngay</span>
              </Link>
            </p>
          </div>
          <div className="mx-6 mt-2 ">
            <p className="font-sans font-semibold text-gray-400">
              Khi tạo tài khoản, bạn vui lòng đọc kỹ
              <span className="text-blued"> Chính sách bảo mật</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
