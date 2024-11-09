import React, { useState, useEffect } from "react";

import sbImg from "../assets/u1GwprK5yFRK0UsCdKzY2MWG8nJpRHhpNzG8h0c4.webp";
import { HiOutlineHome } from "react-icons/hi";
import { TbShirt } from "react-icons/tb";
import { BsBox2 } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { FiPieChart } from "react-icons/fi";
import { TbMessageQuestion } from "react-icons/tb";
import { LuNewspaper } from "react-icons/lu";
import { TbSpeakerphone } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Toggle button */}
      <button
        className="lg:hidden"
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px", // Adjust the button position based on the sidebar state
          zIndex: 100000000000,
          background: "#57578e",
          color: "#fff",
          padding: "6px",
          borderRadius: "50%",
          border: "1px solid ",
        }}
      >
        {isOpen ? <IoMdClose size={20} /> : <IoIosArrowBack size={20} />}
      </button>

      {/* Sidebar */}
      <div
        dir="rtl"
        className="sidebar custom-scrollbar text-white lg:w-260px"
        style={{
          width: isOpen ? "260px" : "0",
          minHeight: "calc(100vh - 56px)",
          marginTop: "56px",
          backgroundColor: "#f1f2f7 ",
          overflowY: "scroll",
          height: "600px",
          position: "fixed",
        }}
      >
        <div className="sidebarLogo ">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {/* badge */}
            <span
              style={{
                backgroundColor: "#f9c02e",
                color: "#271c01",
                borderRadius: "20px",
                //   width:'fit-content !important',
                height: "21.5px",
                fontSize: "12px",
                lineHeight: "12px",
                textAlign: "center",
                verticalAlign: "middle",
                padding: "2px 10px 4px",
                marginBottom: "-15px",
              }}
            >
              سبيشل
            </span>
            <img
              src={sbImg}
              alt="sbpic"
              style={{
                width: "65px",
                height: "65px",
                objectFit: "cover",
                border: "2px dashed #f9c02e",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        <p className="text-center ">متجر الهدايا</p>
        <div
          style={{
            border: "1px solid #57578e",
            borderRadius: "25px",
            width: "fit-content",
            fontSize: "14px",
            margin: "16px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            //   gap: "10px",
            overflow: "hidden",
          }}
        >
          <p
            className="text-center "
            style={{
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
            }}
          >
            زياره المتجر
            <IoIosArrowBack />
          </p>
          {/* share icon */}

          <button
            style={{
              backgroundColor: "#57578e",
              height: "30.6px",
              padding: "4px 12px",
              color: "#a6abc8",
              fontSize: "13px",
              fontWeight: 600,
              borderRadius: "25px",
              marginLeft: "0",
            }}
          >
            <CiShare2 />
          </button>
        </div>

        {/* sidebar list */}
        <ul className="sidebarList ">
          <li>
            <Link to="/" className="sidebarLink ">
              <HiOutlineHome />
              الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/products" className="sidebarLink ">
              <TbShirt />
              المنتجات
            </Link>
          </li>
          <li>
            <Link to="/orders" className="sidebarLink ">
              <BsBox2 />
              الطلبات
            </Link>
          </li>
          <li>
            <Link to="/clients" className="sidebarLink ">
              <GoPeople />
              العملاء
            </Link>
          </li>
          <li>
            <Link to="/reports" className="sidebarLink ">
              <FiPieChart />
              التقارير
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="sidebarLink ">
              <TbMessageQuestion />
              الأسئلة والتقييمات
            </Link>
          </li>
          <li>
            <Link to="/profile" className="sidebarLink ">
              <LuNewspaper />
              الصفحات التعريفية
            </Link>
          </li>
          <li>
            <Link to="/marketing" className="sidebarLink ">
              <TbSpeakerphone />
              الأدوات التسويقية
            </Link>
          </li>
          {/* navigation headers */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#a6abc8",
                fontWeight: "600",
              }}
            >
              قنوات البيع
            </a>
          </li>
          <li>
            <Link to="/mahally" className="sidebarLink ">
              <i class="sicon-mahally"></i>
              محلي
            </Link>
          </li>

          {/* ادوات مسانده */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#a6abc8",
                fontWeight: "600",
              }}
            >
              ادوات مسانده
            </a>
          </li>
          <li>
            <Link to="/experts" className="sidebarLink ">
              <i class="sicon-briefcase"></i>
              خدمات التاجر{" "}
            </Link>
          </li>
          <li>
            <Link to="/influencers" className="sidebarLink ">
              <i class="sicon-user-list"></i>
              المؤثرين{" "}
            </Link>
          </li>
          <li>
            <Link to="/swelly" className="sidebarLink ">
              <TbSpeakerphone />
              اعلانات سويبلي
            </Link>
          </li>

          {/* اعدادات */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#a6abc8",
                fontWeight: "600",
              }}
            >
              الاعدادات{" "}
            </a>
          </li>
          <li>
            <Link to="/marketPlace" className="sidebarLink ">
              <i class="sicon-store"></i>
              باقة المتجر
            </Link>
          </li>
          <li>
            <Link to="/settings" className="sidebarLink ">
              <i class="sicon-settings"></i>
              اعدادات المتجر
            </Link>
          </li>
          <li>
            <Link to="/wallet" className="sidebarLink ">
              <i class="sicon-wallet"></i>
              المحفظة والفواتير
            </Link>
          </li>

          {/* مظهر المنتج */}
          <li className="mt-8 navHeader">
            <a
              href="#f"
              style={{
                color: "#a6abc8",
                fontWeight: "600",
              }}
            >
              مظهر المتجر
            </a>
          </li>
          <li>
            <Link to="/themes" className="sidebarLink ">
              <i class="sicon-store"></i>
              متجر الثيمات
            </Link>
          </li>
          <li>
            <a href="#" className="sidebarLink ">
              <i class="sicon-window-layout"></i>
              تصميم المتجر
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
