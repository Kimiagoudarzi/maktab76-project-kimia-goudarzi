import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "./tableorder.css";

const DeliveredOrdersModal = ({ show, handleClose, currentPost}) => {
  const [order, setOrder] = useState(currentPost[0]);

  const handlePatch = () => {
    try {
      let entiresData = {
       state: true,
      };
      axios
        .patch(`http://localhost:3002/orders/${currentPost}`, entiresData)
        .then((res) => {
          console.log("ress", res.data);
          handleClose();
        });
    } catch (error) {
      console.log("error!");
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="orders-modal-header">نمایش سفارش</Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <form>
            <div key={currentPost[0]?.id}>
              <div className="orders-modal-item">
                <p className="orders-modal-title">نام : </p>
                <p>{currentPost[0]?.username}</p>
              </div>
              <div className="orders-modal-item">
                <p className="orders-modal-title">آدرس : </p>
                <p>{currentPost[0]?.address}</p>
              </div>
              <div className="orders-modal-item">
                <p className="orders-modal-title">تلفن :</p>
                <p>{currentPost[0]?.phone}</p>
              </div>
              <div className="orders-modal-item">
                <p className="orders-modal-title">زمان تحویل : </p>
                <p>{currentPost[0]?.deliveryTime}</p>
              </div>
              <div className="orders-modal-item">
                <p className="orders-modal-title">زمان سفارش : </p>
                <p>{currentPost[0]?.time}</p>
              </div>
            </div>
            <Table striped bordered style={{ marginTop: "35px" }}>
              <thead>
                <tr>
                  <th>کالا</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                </tr>
              </thead>
              <tbody>
                {currentPost.length > 0 ? (
                  <tr>
                    <td>{currentPost[0].products.name}</td>
                    <td>
                      {currentPost[0].products.price
                        ? currentPost[0].products.price
                            .toString()
                            .replace(/\./g, "")
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                        : null}
                    </td>
                    <td>{currentPost[0].products.count}</td>
                  </tr>
                ) : null}
              </tbody>
            </Table>
          </form>

          {currentPost[0]?.state ? (
            <Button
              variant="primary"
              onClick={handleClose}
              className="orders-modal-btn"
            >
              تحویل داده شده
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handlePatch}
              className="orders-modal-btn"
            >
              در انتظار ارسال
            </Button>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeliveredOrdersModal;
