import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import Form from "react-bootstrap/Form";
import "./tableorder.css";

const Orders = () => {
  return (
    <>
      <div className="order-admin-container">
        <NavBar />
        <div className="d-flex mt-5">
          <h1 className="h1-admin-order">مدیریت سفارش ها</h1>
          <Form className="d-flex checkbox-order">
            <div
              className="mb-3"
              style={{ marginLeft: "2rem", fontSize: "19px" }}
            >
              <Form.Check
                type="checkbox"
                id="checkbox"
                label="سفارش های در انتظار ارسال"
              />
            </div>
            <div className="mb-3" style={{ fontSize: "19px" }}>
              <Form.Check
                type="checkbox"
                id="checkbox"
                label="سفارش های تحویل شده"
              />
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
                <th scope="col"></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope="row">کیمیا گودرزی</th>
                <td>150000</td>
                <td>1401/05/09</td>

                <td>
                  <button className="btn-check-order">بررسی سفارش</button>
                </td>
              </tr>
              <tr>
                <th scope="row">کیمیا گودرزی</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">کیمیا گودرزی</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
        <img src={wave} alt="wave" className="img-admin" />
      </div>
    </>
  );
};
export default Orders;
