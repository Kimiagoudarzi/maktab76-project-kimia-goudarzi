import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import Pagination from "./PaginationPrice";
import axios from "axios";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import "./tableprice.css";

const Prices = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(18);


  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              {currentPosts.map((post) => (
                <tr>
                  <th scope="row">{post.id}</th>
                  <td>{post.name}</td>
                  <td>{post.price}</td>
                  <td>{post.stock}</td>
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
export default Prices;
