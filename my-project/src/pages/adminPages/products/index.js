import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Paginnation from "./Pagination";
import NavBar from "layout/adminLayout/navbar";
import React from "react";
import "./table.css";
// import wave from "../../../assets/images/wave.png";

const Products = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = axios.get("http://localhost:3001/products");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);
  console.log(posts);

  // get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            {currentPosts.map((post) => (
              <tr key={post.id}>
                <th scope="row">1</th>
                <td>{post.name}</td>
                <td>{post.price}</td>
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
      <Paginnation
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {/* <img src={wave} alt="wave" className="img-admin" /> */}
    </div>
  );
};
export default Products;
