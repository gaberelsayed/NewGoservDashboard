import { HiOutlineMoon } from "react-icons/hi2";
import { GoGift } from "react-icons/go";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import Dropdown from "./DropDown";

import profilePic from "../assets/112e28edfaa501b1942f68247921fcec.png";

import Profileropdown from "./Profileropdown";
import Tooltip from "./Tooltip";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`navBar fixed top-0 left-0 flex-wrap  lg:flex-nowrap ${
        darkMode ? "dark" : ""
      }`}
      style={{
        width: "100%",
        verticalAlign: "middle",
        height: "56px",
        backgroundColor: darkMode ? "#212121" : "#fcfcfc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="w-full lg:w-64 bg:white flex justify-center lg:block "
        style={{
          height: "100%",
          backgroundColor: "#f1f2f7",
          padding: "5px 0",
          paddingRight: "18px",
        }}
      >
        <img src="logo.svg" alt="" style={{ width: "80px" }} />
      </div>

      <div className="nav-wrapper px-10 flex justify-between items-center flex-grow">
        <div
          className="search-wrapper flex items-center relative overflow-hidden bg-white"
          style={{
            width: "fit-content",
            borderRadius: "5px",
            height: "38px",
            backgroundColor: darkMode ? "#272626" : "#FFFFFF",
          }}
        >
          <input
            className="w-auto lg:w-[350px]"
            type="text"
            placeholder="ابحث برقم الطلب"
            style={{
              maxWidth: "350px",
              width: "300px !important",
              height: "38px",
              border: "1px solid #eee",
              color: "#999",
              fontSize: "14px",
              padding: "8px 20px",
              position: "relative",
              backgroundColor: darkMode ? "#272626" : "#FFFFFF",
            }}
          />
          <Tooltip
            text="للبحث عن اكتر من طلب يرجى الالتزام بالصيغه التاليه"
            className="hidden lg:block"
          >
            <AiOutlineInfoCircle
              className="hidden lg:block"
              style={{ position: "absolute", left: "150px", top: "11px" }}
            />
          </Tooltip>

          <Dropdown />
          <button
            className="flex items-center justify-center"
            style={{
              backgroundColor: "#f1f2f7",
              height: "38px",
              width: "48px",
            }}
          >
            <IoSearch />
          </button>
        </div>

        <div className="flex items-center  mx-3 lg:mx-0">
          <div className="theme-buttons flex items-center justify-center gap-3 ">
            <button
              className="hidden lg:flex"
              style={{
                border: "1px solid #a6abc8",
                borderRadius: "50%",
                cursor: "pointer",
                width: "38px",
                height: "38px",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                color: "black",
                padding: "0",
              }}
            >
              <GoGift />
            </button>
            <button
              className="mx-1 lg:mx-0"
              style={{
                backgroundColor: darkMode ? "#baf3e6" : "#fcfcfc",
                border: "1px solid #a6abc8",
                color: "black",
                borderRadius: "50%",
                cursor: "pointer",
                width: "38px",
                height: "38px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0",
              }}
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <HiOutlineMoon />
            </button>
          </div>

          {/* profile */}
          <div className="flex items-center gap-3 p-2 mt-2 mx-3  absolute top-0 left-0 lg:static">
            <img
              src={profilePic}
              alt="profile"
              style={{ width: "28px", height: "28px", borderRadius: "50%" }}
            />
            <span className="text-sm text-gray-600 hidden lg:inline-block">
              متجر الهدايا
            </span>
            <Profileropdown setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
