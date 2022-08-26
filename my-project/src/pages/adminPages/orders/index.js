import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import Form from "react-bootstrap/Form";
import "./tableorder.css";

const Orders = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // pagination
  let limit = 15;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3002/products?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));
      setPosts(data);
    };
    getComments();
  }, [limit]);
 

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3002/orders?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);
    setPosts(commentsFormServer);
  };
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
                  <td>
                    <button className="btn-check-order">بررسی سفارش</button>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
        <ReactPaginate
          previousLabel={"قبلی"}
          nextLabel={"بعدی"}
          pageCount={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
        <img src={wave} alt="wave" className="img-admin" />
      </div>
    </>
  );
};
export default Orders;
