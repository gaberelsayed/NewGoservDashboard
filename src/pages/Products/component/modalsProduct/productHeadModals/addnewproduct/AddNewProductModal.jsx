import React, { useContext, useState } from "react";
import "../../../ProductHead.css";
import { Modal, Button } from "react-bootstrap";
import Readymadetemplates from "./Readymadetemplates";
import { ProductContext } from "../../../../../../components/context/Product";
const AddNewProductModal = () => {
  const { dispatch } = useContext(ProductContext);

  const [showAddProductModal, setshowAddProductModal] = useState(false);

  const handleShowModal = () => setshowAddProductModal(true);
  const handleCloseModal = () => setshowAddProductModal(false);

  const handleAddProduct = (placeholder) => {
    const newProductData = {
      id: 0,
      firstPhoto:
        "https://cdn.assets.salla.network/prod/admin/cp/assets/images/placeholder.png",
      type: placeholder,
      form: true,
      name: "",
      price: "",
    };
    dispatch({ type: "addProducrForm", payload: newProductData });
    handleCloseModal();
  };

  const closeAddProductWhenTemplateOpens = () => {
    handleCloseModal();
  };

  return (
    <>
      <Button className="btn-newadd-product" onClick={handleShowModal}>
        <span className="spanIcon">
          <i className="sicon-add mx-3"></i>
          إضافة منتج جديد
          <span className="caret-icon me-2 mx-3" style={{ color: "#fff" }}>
            {showAddProductModal ? (
              <i className="sicon-keyboard_arrow_down"></i>
            ) : (
              <i className="sicon-keyboard_arrow_up"></i>
            )}
          </span>
        </span>
      </Button>
      <Modal
        show={showAddProductModal}
        onHide={handleCloseModal}
        dialogClassName="left-aligned"
      >
        <Modal.Body>
          <div className="dropdown-item">
            <div
              className="text-container"
              onClick={() => handleAddProduct("منتج جاهز")}
            >
              <h6>منتج جاهز</h6>
              <p>المنتجات الملموسة والقابلة للشحن</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-packed-box"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("خدمة حسب الطلب")}
          >
            <div className="text-container">
              <h6>خدمة حسب الطلب</h6>
              <p>التصميم، الطباعة، البحوث، الكتابة</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-fabric-swatch"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("أكل")}
          >
            <div className="text-container">
              <h6>أكل</h6>
              <p>المأكولات والمشروبات التي تطلبها حسب خاص</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-cake"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("منتج رقمي")}
          >
            <div className="text-container">
              <h6>منتج رقمي</h6>
              <p>الكتب الإلكترونية، الدورات، ملفات التحميل</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-game-controller-alt"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("بطاقة رقمية")}
          >
            <div className="text-container">
              <h6>بطاقة رقمية</h6>
              <p>بطاقات الإهداء، حسابات للبيع</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-barcode-scan"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("مجموعة منتجات")}
          >
            <div className="text-container">
              <h6>مجموعة منتجات</h6>
              <p>أكثر من منتج في منتج واحد</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-inbox-full"></i>
            </div>
          </div>

          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("حجوزات")}
          >
            <div className="text-container">
              <h6>حجوزات</h6>
              <p>دورات، استشارات، خدمات طبية وسياحية</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-calendar-date"></i>
            </div>
          </div>

          <Readymadetemplates
            closeAddProductModal={closeAddProductWhenTemplateOpens}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddNewProductModal;
