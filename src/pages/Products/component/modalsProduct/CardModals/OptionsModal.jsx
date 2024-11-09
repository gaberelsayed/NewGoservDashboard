import React, { useState, useEffect } from "react";
import "../../ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";
import "../../ProductsRow.css";

const defaultQuantities = [];

const OptionsModal = ({ isColumn }) => {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleOptionsModalClose = () => setShowOptionsModal(false);
  const handleOptionsModalShow = () => setShowOptionsModal(true);
  const [options, setOptions] = useState([{ color: "", language: "AR" }]);
  const addOption = () => {
    setOptions([...options, { color: "", language: "AR" }]);
  };

  const [tempColor, setTempColor] = useState("");

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...options];
    newOptions[index][field] = value;
    setOptions(newOptions);
  };

  const [expandedItem, setExpandedItem] = useState(null);
  const handleItemToggle = (color) => {
    setExpandedItem((prev) => (prev === color ? null : color));
  };

  const incrementQuantity = (color) => {};

  const decrementQuantity = (color) => {};

  const [showList, setShowList] = useState(false);

  const addNewOption = () => {
    setShowDeleteButton(true);
    setShowList(true);
    setOptions([
      ...options,
      {
        color: "",
        language: "AR",
      },
    ]);
  };

  const removeOptionList = () => {
    setShowList(false);
    setOptions([]);
  };

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const removeOptionHeaderList = () => {
    setShowDeleteButton(false);
  };

  const [unlimited, setUnlimited] = useState(false);
  const [showTotal, setShowTotal] = useState(false);

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
              <div
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
                      >
                        <option>نص</option>
                        <option>اللون</option>
                        <option>الصورة</option>
                      </select>
                    </div>

                    {showDeleteButton && (
                      <button
                        onClick={removeOptionHeaderList}
                        className="delete-button-list"
                      >
                        <i className="icon sicon-trash-2"></i>
                      </button>
                    )}
                  </div>
                </div>
                {options.map((option, index) => (
                  <div key={index} style={{ display: "flex" }}>
                    <div className="option-container-body">
                      <div className="option-input-body">
                        <i
                          className="sicon-type-square"
                          style={{ color: "#aaa", paddingRight: "7px" }}
                        ></i>
                        <input
                          type="text"
                          placeholder="القيمة"
                          onChange={(e) => setTempColor(e.target.value)}
                          onBlur={(e) => {
                            handleOptionChange(index, "color", e.target.value);
                          }}
                          onFocus={() => setTempColor(option.color)}
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
                    <button className="delete-button-body">
                      <i className="icon sicon-trash-2"></i>
                    </button>
                  </div>
                ))}
                <button onClick={addOption} className="add-option-button">
                  <span className="plus-icon">+</span> إضافة قيمة جديدة
                </button>
              </div>
              {showList && (
                <div
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
                        >
                          <option>نص</option>
                          <option>اللون</option>
                          <option>الصورة</option>
                        </select>
                      </div>
                      {showList && (
                        <button
                          onClick={removeOptionList}
                          className="delete-button-list"
                        >
                          <i className="icon sicon-trash-2"></i>
                        </button>
                      )}
                    </div>
                  </div>
                  {options.map((option, index) => (
                    <div key={index} style={{ display: "flex" }}>
                      <div className="option-container-body">
                        <div className="option-input-body">
                          <i
                            className="sicon-type-square"
                            style={{ color: "#aaa", paddingRight: "7px" }}
                          ></i>
                          <input
                            type="text"
                            placeholder="القيمة"
                            value={option.color}
                            onChange={(e) =>
                              handleOptionChange(index, "color", e.target.value)
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
                      <button className="delete-button-body">
                        <i className="icon sicon-trash-2"></i>
                      </button>
                    </div>
                  ))}

                  <button onClick={addNewOption} className="add-option-button">
                    <span className="plus-icon">+</span> إضافة قيمة جديدة
                  </button>
                </div>
              )}

              <button onClick={addNewOption} className="addNewOption">
                <span className="plus-icon">+</span> إضافة خيار جديد
              </button>

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
                                  decrementQuantity(item.color);
                                }}
                              >
                                -
                              </button>
                              <span>{item.available}</span>
                              <button
                                className="btn btn-light"
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementQuantity(item.color);
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
