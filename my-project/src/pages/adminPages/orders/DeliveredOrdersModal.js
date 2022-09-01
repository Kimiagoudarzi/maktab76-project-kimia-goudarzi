import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "./tableorder.css";

const DeliveredOrdersModal = ({
  show,
  handleClose,
  id,
  handleWaiting,
  currentPost
}) => {
  const [order, setOrder] = useState({});
 

  // fetch
  useEffect(() => {
    axios.get(`http://localhost:3002/orders/${id}`).then((res) => {
      setOrder(res.data);
    });
  }, [id]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="orders-modal-header">نمایش سفارش</Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <form>
            <div key={order?.id}>
              <div className="orders-modal-item">
                <p className="orders-modal-title">نام : </p>
                <p>{order?.username}</p>
              </div>
              <div className="orders-modal-item">
                <p className="orders-modal-title">آدرس : </p>
                <p>{order?.address}</p>
              </div>
              <div className="orders-modal-item">
                <p className="orders-modal-title">تلفن :</p>
                <p>{order?.phone}</p>
              </div>
              <div className="orders-modal-item">
                <p className="orders-modal-title">زمان تحویل : </p>
                <p>12</p>
              </div>
              <div className="orders-modal-item">
                <p className="orders-modal-title">زمان سفارش : </p>
                <p>{order?.time}</p>
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
                <tr>
                  <td>{currentPost}</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </form>
          {handleWaiting ? (
            <Button
              variant="primary"
              onClick={handleClose}
              className="orders-modal-btn"
              disabled
            >
              در انتظار ارسال
            </Button>
          ) : (
            <div>
              <p>زمان تحویل</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeliveredOrdersModal;
