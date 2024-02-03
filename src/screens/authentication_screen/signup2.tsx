import React from "react";
import { Link } from "react-router-dom";

function SignUp2() {
  return (
    <div className="flex h-screen ">
      <div className="h-full bg-blue-500 w-1/3 self-center"></div>{" "}
      <div className="relative">
        <img className="h-14 mx-32 mt-3" src="images/unilogo.png" alt="" />
        <p className=" font-sans font-semibold mt-12 text-3xl mx-32 tracking-wider">
          Tạo tài khoản UniCungDi
        </p>
        <p className="font-sans font-medium mt-4 text-xs mx-32">
          Chỉ dành cho sinh viên đang học tập tại các trường thuộc khu vục thành
          phố Hồ Chí Minh
        </p>
        <div className="mt-8 mx-32 flex">
          <div>
            <p className="font-sans font-semibold text-sm">Họ</p>
            <input
              className="border-2 border-blued focus:outline-none mt-2"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp2;
