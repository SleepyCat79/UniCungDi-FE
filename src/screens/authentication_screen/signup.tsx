import React from "react";

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
          <input
            className="border-2  rounded-l-lg w-80 h-12"
            style={{ backdropFilter: "blur(7.61834192276001px)" }}
            type="text"
            placeholder="Email"
          />
          {/* <button className="bg-black text-white rounded-r-lg w-24 h-12">
            Gửi
          </button> */}
          <p className="font-sans font-semibold mt-3 mx-5">
            Chúng tôi sẽ gửi cho bạn một email xác nhận
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
