import React from "react";
import NavBar from "../../../layout/adminLayout/navbar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import wave from "../../../assets/images/wave.png";
import "./tableprice.css";

const Prices = () => {
  return (
    <>
      <div className="price-admin-container">
        <NavBar />
        <div className="d-flex mt-5">
          <h1 className="h1-admin-price">مدیریت موجودی و قیمت ها </h1>
          <button className="btn-save-price">ذخیره</button>
        </div>
        <div className="table-main">
          <MDBTable bordered style={{ borderColor: "#521850" }}>
            <MDBTableHead>
              <tr>
                <th scope="col">شماره کالا</th>
                <th scope="col">نام کالا</th>
                <th scope="col">قیمت</th>
                <th scope="col">موجودی</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope="row">1</th>
                <td>کرم پودر این لی </td>
                <td><input type='text' style={{border:"none"}} value="150000"/></td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
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
export default Prices;
