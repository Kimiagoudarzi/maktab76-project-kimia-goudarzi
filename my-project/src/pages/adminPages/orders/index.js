import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import DeliveredOrdersModal from "./DeliveredOrdersModal";
import axios from "axios";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import Form from "react-bootstrap/Form";
import "./tableorder.css";

const Orders = () => {
  const [posts, setPosts] = useState([]);

  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/orders")
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  const totalOrders = () => {
    axios
      .get("http://localhost:3002/orders?state=false&&state=true")
      .then((res) => {
        setPosts(res.data);
      });
  };
  const handleWaiting = () => {
    axios
      .get("http://localhost:3002/orders?state=false")
      .then((res) => setPosts(res.data));
  };
  const handleDeleverd = () => {
    axios
      .get("http://localhost:3002/orders?state=true")
      .then((res) => setPosts(res.data));
  };

  return (
    <>
      <div className="order-admin-container">
        <NavBar />
        <div className="d-flex mt-5">
          <h1 className="h1-admin-order">مدیریت سفارش ها</h1>
          <Form className="d-flex checkbox-order">
            <div style={{ marginLeft: "40px", marginRight: "-85px" }}>
              <input
                type="radio"
                id="entezar"
                name="sefaresh"
                value="entezar"
                onClick={totalOrders}
              />
              <label
                for="entezar"
                style={{
                  marginRight: "10px",
                }}
              >
                کل سفارش ها
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="tahvil"
                name="sefaresh"
                value="HTML"
                onClick={handleDeleverd}
              />
              <label for="tahvil" style={{ marginRight: "10px" }}>
                سفارش های تحویل شده
              </label>
            </div>
            <div style={{ marginRight: "40px" }}>
              <input
                type="radio"
                id="entezar"
                name="sefaresh"
                value="entezar"
                onClick={handleWaiting}
              />
              <label
                for="entezar"
                style={{
                  marginRight: "10px",
                }}
              >
                سفارش های در انتظار ارسال
              </label>
            </div>
          </Form>
        </div>
        <div className="table-main">
          <MDBTable bordered style={{ borderColor: "#521850" }}>
            <MDBTableHead>
              <tr>
                <th scope="col">نام کاربر</th>
                <th scope="col">مجموع مبلغ</th>
                <th scope="col">زمان ثبت سفارش</th>
                <th scope="col">وضعیت سفارش</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {posts.map((post) => (
                <tr>
                  <th scope="row">{post.username}</th>
                  <td>{post.totalPrice}</td>
                  <td>{post.time}</td>
                  <td style={{width: "16rem"}}>
                    <button className="btn-check-order" onClick={(id)=>{handleShow(id)}}>
                      بررسی سفارش
                    </button>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
        <img src={wave} alt="wave" className="img-admin" />
      </div>

      {/* DeliveredOrdersModal */}
      <DeliveredOrdersModal show={show} handleClose={handleClose} />
    </>
  );
};
export default Orders;
