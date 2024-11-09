import React, { useState, useEffect } from "react";
import "../../ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";
import "../../ProductsRow.css";

const OptionsModal = ({ isColumn }) => {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleOptionsModalClose = () => setShowOptionsModal(false);
  const handleOptionsModalShow = () => setShowOptionsModal(true);

  const [expandedItem, setExpandedItem] = useState(null);
  const handleItemToggle = (color) => {
    setExpandedItem((prev) => (prev === color ? null : color));
  };

  const optionListData = {
    color: "",
    value: "",
    images: [],
    sizes: {
      text: "",
      prices: "",
      quantity: "",
    },
  };

  const handeleSubmit = (e) => {
    e.preventDefault();
    optionList.map((item) => {
      if (
        item.color == "" ||
        item.value == "" ||
        item.images.length == 0 ||
        item.sizes.text == "" ||
        item.sizes.prices == "" ||
        item.sizes.quantity == ""
      ) {
        console.log("please add all fields");
        return;
      } else {
        console.log("ok");
      }
    });
  };

  const [optionList, setOptionList] = useState([optionListData]);

  const deleteList = (i) => {
    setOptionList(optionList.filter((item, index) => index !== i));
  };

  const [unlimited, setUnlimited] = useState(false);
  const [showTotal, setShowTotal] = useState(false);

  const [optiontype, setOPtiontype] = useState("color");

  const handleuploadeImages = (e, index) => {
    let newoptions = optionList.map((item, i) => {
      if (i == index) {
        return { ...item, images: Array.from(e.target.files) };
      } else {
        return item;
      }
    });
    setOptionList(newoptions);
  };

  console.log(optionList);

  const handleOptionChange = (e, index, name) => {
    let newoptions;
    if (name == "text" || name == "prices" || name == "quantity") {
      newoptions = optionList.map((item, i) => {
        if (i == index) {
          return { ...item, sizes: { ...item.sizes, [name]: e.target.value } };
        } else {
          return item;
        }
      });
      setOptionList(newoptions);
    } else {
      newoptions = optionList.map((item, i) => {
        if (i == index) {
          return { ...item, [name]: e.target.value };
        } else {
          return item;
        }
      });
      setOptionList(newoptions);
    }
  };

  return (
    <>
      {isColumn ? (
        <div
          className="quantityAndChoies"
          onClick={handleOptionsModalShow}
          style={{ borderRight: "1px solid #aaa" }}
        >
          <p style={{ fontSize: "10px", color: "black" }}>الخيارات والكمية</p>
        </div>
      ) : (
        <div
          style={{
            borderRight: "1px solid #aaa",
            marginRight: "35px",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={handleOptionsModalShow}
        >
          <p
            style={{
              fontSize: "10px",
              position: "absolute",
              top: 13,
              right: 10,
            }}
          >
            الخيارات
          </p>
        </div>
      )}
      <Modal
        show={showOptionsModal}
        onHide={handleOptionsModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="options"
      >
        <div className="modal-header">
          <h4>إدارة الكميات </h4>
          <Button
            variant="link"
            onClick={handleOptionsModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body style={{ direction: "rtl" }}>
          <div
            style={{
              width: "100%",
              border: "1px solid blue",
              padding: "3px",
              backgroundColor: "rgb(167, 168, 180, 0.33)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                color: "blue",
                width: "25px",
                height: "25px",
              }}
            />
            <p style={{ marginLeft: "10px" }}>
              يمكنك إدارة الكمية بناءً على خيارات المنتج
            </p>
          </div>
          <div className="toggle-switch">
            <label>
              <input
                type="checkbox"
                checked={isToggleOn}
                onChange={() => setIsToggleOn(!isToggleOn)}
              />
              <span className="slider"></span>
            </label>
            <span style={{ marginRight: "10px" }}>تفعيل خيارات المنتج</span>
          </div>
          {isToggleOn && (
            <div>
              <form>
                {optionList.map((option, i) => (
                  <div
                    key={i}
                    className="option-list"
                    style={{ backgroundColor: "rgba(0,0,0,3%)" }}
                  >
                    <div className="option-container toggleheader-section">
                      <div className="right-toggleHeader">
                        <i
                          className="sicon-type-square"
                          style={{ color: "#aaa", paddingRight: "7px" }}
                        ></i>
                        <input
                          type="text"
                          className="option-input"
                          placeholder="اللون"
                          style={{ marginRight: "0px", border: "none" }}
                          value={optionList[i].color}
                          onChange={(e) => handleOptionChange(e, i, "color")}
                          required
                        />
                        <select
                          className="option-select"
                          style={{ border: "none" }}
                        >
                          <option value="AR">AR</option>
                          <option value="EN">EN</option>
                        </select>
                      </div>
                      <div
                        className="left-toggleHeader"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="iconSelectclass"
                          style={{
                            border: "1px solid #ddd",
                            backgroundColor: "#ffff",
                          }}
                        >
                          <i
                            className="sicon-file-partial"
                            style={{
                              position: "absolute",
                              top: 20,
                              right: 30,
                              color: "#aaa",
                            }}
                          ></i>
                          <select
                            className="option-select"
                            style={{ border: "none" }}
                            onChange={(e) => setOPtiontype(e.target.value)}
                          >
                            <option
                              selected={"color" == optiontype}
                              value="color"
                            >
                              اللون
                            </option>
                            <option
                              value="sizes"
                              selected={"sizes" == optiontype}
                            >
                              المقاسات
                            </option>
                            <option
                              value="images"
                              selected={"images" == optiontype}
                            >
                              الصور
                            </option>
                          </select>
                        </div>

                        <button
                          className="delete-button-list"
                          onClick={() => deleteList(i)}
                        >
                          <i className="icon sicon-trash-2"></i>
                        </button>
                      </div>
                    </div>
                    {optiontype == "color" && (
                      <div style={{ display: "flex" }}>
                        <div className="option-container-body">
                          <div className="option-input-body">
                            <i
                              className="sicon-type-square"
                              style={{ color: "#aaa", paddingRight: "7px" }}
                            ></i>
                            <input
                              type="text"
                              placeholder="القيمة"
                              value={optionList[i].value}
                              onChange={(e) =>
                                handleOptionChange(e, i, "value")
                              }
                              required
                            />
                          </div>

                          <select
                            className="option-select-body"
                            style={{ border: "none" }}
                          >
                            <option value="AR">AR</option>
                            <option value="EN">EN</option>
                          </select>
                        </div>
                      </div>
                    )}
                    {optiontype == "sizes" && (
                      <div className="container">
                        <div style={{ display: "flex" }}>
                          <div className="option-container-body">
                            <div className="option-input-body">
                              <i
                                className="sicon-type-square"
                                style={{ color: "#aaa", paddingRight: "7px" }}
                              ></i>
                              <input
                                type="text"
                                placeholder="المقاسات"
                                value={optionList[i].sizes.text}
                                onChange={(e) =>
                                  handleOptionChange(e, i, "text")
                                }
                                required
                              />
                            </div>

                            <select
                              className="option-select-body"
                              style={{ border: "none" }}
                            >
                              <option value="AR">AR</option>
                              <option value="EN">EN</option>
                            </select>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className="option-container-body">
                            <div className="option-input-body">
                              <i
                                className="sicon-type-square"
                                style={{ color: "#aaa", paddingRight: "7px" }}
                              ></i>
                              <input
                                type="text"
                                placeholder="الاسعار"
                                value={optionList[i].sizes.prices}
                                onChange={(e) =>
                                  handleOptionChange(e, i, "prices")
                                }
                                required
                              />
                            </div>

                            <select
                              className="option-select-body"
                              style={{ border: "none" }}
                            >
                              <option value="AR">AR</option>
                              <option value="EN">EN</option>
                            </select>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className="option-container-body">
                            <div className="option-input-body">
                              <i
                                className="sicon-type-square"
                                style={{ color: "#aaa", paddingRight: "7px" }}
                              ></i>
                              <input
                                type="text"
                                placeholder="الكمية"
                                name="quantity"
                                value={optionList[i].sizes.quantity}
                                onChange={(e) =>
                                  handleOptionChange(e, i, "quantity")
                                }
                              />
                            </div>

                            <select
                              className="option-select-body"
                              style={{ border: "none" }}
                            >
                              <option value="AR">AR</option>
                              <option value="EN">EN</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {optiontype == "images" && (
                      <div className="option-container-body d-flex flex-col">
                        <div className="image-upload-area w-full">
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            style={{ display: "none" }}
                            id="file-input"
                            onChange={(e) => handleuploadeImages(e, i)}
                            required
                          />
                          <label
                            htmlFor="file-input"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="upload-button">
                              <p>اسحب الصورة وأفلتها هنا</p>
                              <p> او تصفح من جهازك</p>
                            </div>
                          </label>
                        </div>
                        <div className="uploaded-images-container d-flex">
                          {option.images?.map((image, index) => (
                            <div key={index} className="uploaded-image">
                              <img
                                src={URL.createObjectURL(image)}
                                alt={`Uploaded ${index + 1}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <button
                  className="addNewOption"
                  type="submit"
                  onClick={() =>
                    setOptionList((prev) => [...prev, optionListData])
                  }
                >
                  <span className="plus-icon">+</span> إضافة خيار جديد
                </button>
                <button
                  className="addNewOption"
                  type="submit"
                  onClick={(e) => handeleSubmit(e)}
                >
                  <span className="plus-icon">+</span> إضافة خيار جديد
                </button>
              </form>

              <Form className="mt-5 quantitiesClass">
                <Form.Group className="mb-3">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Check
                        type="checkbox"
                        checked={unlimited}
                        onChange={() => setUnlimited(!unlimited)}
                        onClick={() => setShowTotal(true)}
                      />
                    </Col>
                    <Col>
                      <Form.Label className="mb-0">
                        الكمية غير محدودة
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label className="mb-0">
                        {showTotal && <p></p>}
                      </Form.Label>
                    </Col>
                  </Row>
                </Form.Group>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div key={index}>
                    <div
                      className="d-flex justify-content-between mb-2"
                      onClick={() => handleItemToggle(item.color)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="flex-grow-1 bg-light p-2 rounded">
                        <span
                          style={{
                            fontSize: "10px",
                            border: "1px solid #aaa",
                            padding: "3px",
                            borderRadius: "4px",
                            marginLeft: "5px",
                          }}
                        >
                          {" "}
                          +{" "}
                        </span>
                        {item.color}
                      </div>
                      <div
                        className="ms-2 bg-light p-2 rounded text-end"
                        style={{ minWidth: "120px" }}
                      >
                        متوفر عدد {item.available}
                      </div>
                    </div>
                    {expandedItem === item.color && (
                      <div className="additional-content p-3 rounded mt-2">
                        <div className="product-form">
                          <div className="row">
                            <div
                              className="col"
                              style={{
                                backgroundColor: "white",
                                borderRadius: "5px",
                              }}
                            >
                              <input
                                type="text"
                                placeholder="السعر"
                                style={{
                                  outline: "none",
                                  border: "none",
                                  backgroundColor: "none",
                                }}
                              />
                              <label
                                className="p-2 text-start"
                                style={{ borderRight: "1px solid #aaa" }}
                              >
                                ر.س
                              </label>
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col">
                              <div
                                className="col"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "5px",
                                }}
                              >
                                <input
                                  type="text"
                                  placeholder="سعر التكلفة"
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "none",
                                  }}
                                />
                                <label
                                  className="p-2 text-start"
                                  style={{ borderRight: "1px solid #aaa" }}
                                >
                                  ر.س
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div
                                className="col"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "5px",
                                }}
                              >
                                <input
                                  type="text"
                                  placeholder="السعر المنخفض"
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "none",
                                  }}
                                />
                                <label
                                  className="p-2 text-start"
                                  style={{ borderRight: "1px solid #aaa" }}
                                >
                                  ر.س
                                </label>
                              </div>
                            </div>
                          </div>
                          <div
                            className="row mt-3"
                            style={{ marginTop: "20px" }}
                          >
                            <div className="col">
                              <div
                                className="col"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "5px",
                                }}
                              >
                                <input
                                  type="text"
                                  placeholder="الوزن"
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "none",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                placeholder="باركود"
                                style={{
                                  outline: "none",
                                  border: "none",
                                  backgroundColor: "none",
                                  width: "120px",
                                }}
                              />
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                placeholder="SKU"
                                style={{
                                  outline: "none",
                                  border: "none",
                                  backgroundColor: "none",
                                  width: "120px",
                                }}
                              />
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                placeholder="اقل كمية للتنبية"
                                style={{
                                  outline: "none",
                                  border: "none",
                                  backgroundColor: "none",
                                  width: "200px",
                                }}
                              />
                            </div>
                          </div>

                          <label
                            style={{
                              marginTop: "20px",
                              marginBottom: "-20px",
                            }}
                          >
                            الكمية
                          </label>
                          <div className="quantity-section mt-2">
                            <div>
                              <label>كمية المنتج</label>
                            </div>
                            <div className="quantity-control">
                              <button
                                className="btn btn-light"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                              >
                                -
                              </button>
                              <span>{item.available}</span>
                              <button
                                className="btn btn-light"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </Form>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="save-btn-options">
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OptionsModal;
