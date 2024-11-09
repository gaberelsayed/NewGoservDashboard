import React, { useContext } from "react";
import "./ProductHead.css";
import { Button } from "react-bootstrap";
import { FaTh, FaList } from "react-icons/fa";
import AddNewProductModal from "./modalsProduct/productHeadModals/addnewproduct/AddNewProductModal";
import FilterModal from "./modalsProduct/productHeadModals/filter/FilterModal";
import ServiceModal from "./modalsProduct/productHeadModals/service/ServiceModal";
import { ProductContext } from "../../../components/context/Product";

const ProductHead = ({ showProductList, hideProductList }) => {
  return (
    <div className="header-container">
      <div className="header-right" style={{ marginRight: "-20px" }}>
        <AddNewProductModal />
      </div>
      <div className="header-left">
        <FilterModal />
        <ServiceModal />
        <Button className="btn-grid" onClick={showProductList}>
          <FaTh className="icon" style={{ color: "#999" }} />
        </Button>
        <Button className="btn-list" onClick={hideProductList}>
          <FaList className="icon" style={{ color: "#999" }} />
        </Button>
      </div>
    </div>
  );
};

export default ProductHead;
