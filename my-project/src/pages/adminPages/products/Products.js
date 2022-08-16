import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "layout/adminLayout/navbar";
import React from "react";
import "./table.css";
// import wave from "../../../assets/images/wave.png";

const Products = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch("http://localhost:4000/cosmetic");
    const responseData = await response.json();
    console.log(responseData);
    setData(responseData);
  }
  useEffect(() => {
    getData();
  }, []);
  
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
            {data.map((item, i) => (
              <tr key={i}>
                <th scope="row">1</th>
                <td>{item.name}</td>
                <td>{item.Grouping}</td>
                <td>
                  <Link to="/eee">
                    <FaPenSquare className="edit-icon-admin" />
                  </Link>
                  <Link to="/eee">
                    <FaTrash className="trash-icon-admin" />
                  </Link>
                </td>
              </tr>
            ))}
            {/* <tr>
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
            </tr> */}
          </MDBTableBody>
        </MDBTable>
      </div>
      {/* <img src={wave} alt="wave" className="img-admin" /> */}
    </div>
  );
};
export default Products;
