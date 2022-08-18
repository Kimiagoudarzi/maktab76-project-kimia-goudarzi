import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import Pagination from "./PaginationOrders";
import axios from "axios";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import Form from "react-bootstrap/Form";
import "./tableorder.css";
import DatePicker from "react-datepicker";

const Orders = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orders?state=false&&state=true")
      .then((res) => {
        setPosts(res.data);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const handleWaiting = () => {
    axios
      .get("http://localhost:3001/orders?state=false")
      .then((res) => setPosts(res.data));
  };
  const handleDeleverd = () => {
    axios
      .get("http://localhost:3001/orders?state=true")
      .then((res) => setPosts(res.data));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="order-admin-container">
        <NavBar />
        <div className="d-flex mt-5">
          <h1 className="h1-admin-order">مدیریت سفارش ها</h1>
          <Form className="d-flex checkbox-order">
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
                <th scope="col"></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {currentPosts.map((post) => (
                <tr>
                  <th scope="row">{post.username}</th>
                  <td>{post.totalPrice}</td>
                  <td>{post.time}</td>
                  <td>
                    <button className="btn-check-order">بررسی سفارش</button>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
        <img src={wave} alt="wave" className="img-admin" />
      </div>
    </>
  );
};
export default Orders;
