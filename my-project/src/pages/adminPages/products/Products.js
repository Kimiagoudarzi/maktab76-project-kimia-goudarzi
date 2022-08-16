import React from "react";
import "./table.css";
import NavBar from "../../../layout/adminLayout/navbar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import wave from "../../../assets/images/wave.png";

const Products = () => {
  return (
    <div className="product-admin-container">
      <NavBar />
      <div className="d-flex mt-5">
        <h1 className="h1-admin-product">مدیریت کالاها </h1>
        <button className="btn-add-product">افزودن کالا</button>
      </div>
      <div className="table-main">
        <MDBTable bordered style={{ borderColor: "#521850" }}>
          <MDBTableHead>
            <tr>
              <th scope="col">شماره کالا</th>
              <th scope="col">نام کالا</th>
              <th scope="col">دسته بندی</th>
              <th scope="col"></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            
            <tr>
              <th scope="row">1</th>
              <td>کرم پودر این لی </td>
              <td>لوازم آرایشی</td>
              <td>
                <Link to="/eee">
                  <FaPenSquare className="edit-icon-admin" />
                </Link>
                <Link to="/eee">
                  <FaTrash className="trash-icon-admin" />
                </Link>
              </td>
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
  );
};
export default Products;
