import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "./tableorder.css";

const DeliveredOrdersModal = ({ show, handleClose }) => {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  // fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:3002/orders/${id}`);
      setOrder(res.data);
    };
    fetchPosts();
  }, [id]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="orders-modal-header">نمایش سفارش</Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <form>
            <div className="orders-modal-item">
              <p className="orders-modal-title">نام :</p>
              <p>{order.username}</p>
            </div>
            <div className="orders-modal-item">
              <p className="orders-modal-title">آدرس :</p>
              <p>{order.address}</p>
            </div>
            <div className="orders-modal-item">
              <p className="orders-modal-title">تلفن :</p>
              <p></p>
            </div>
            <div className="orders-modal-item">
              <p className="orders-modal-title">زمان تحویل :</p>
              <p></p>
            </div>
            <div className="orders-modal-item">
              <p className="orders-modal-title">زمان سفارش :</p>
              <p></p>
            </div>
            <Table striped bordered style={{ marginTop: "35px" }}>
              <thead>
                <tr>
                  <th>کالا</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </form>

          <Button
            variant="primary"
            onClick={handleClose}
            className="orders-modal-btn"
            disabled
          >
            در انتظار ارسال
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeliveredOrdersModal;
