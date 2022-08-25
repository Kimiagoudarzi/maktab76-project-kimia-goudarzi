import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import "./table.css";

const ProductsAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(18);
  
  
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3002/products")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
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

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginate = (pageNumber) => {
    axios
    .get(`http://localhost:3002/products?_page=${pageNumber}&_limit=15`)
    .then((res) => {
      setPosts(res.data);
    }).catch(() => {
      alert("There was an error while retrieving the data");
    });
  }


  return (
    <div className="product-admin-container">
      <NavBar />
      <div className="d-flex mt-5">
        <h1 className="h1-admin-product">مدیریت کالاها </h1>
        <button className="btn-add-product">افزودن کالا</button>
      </div>
      <div className="table-main">
        <MDBTable bordered hover style={{ borderColor: "#521850" }}>
          <MDBTableHead>
            <tr>
              <th scope="col">عکس کالا</th>
              <th scope="col">نام کالا</th>
              <th scope="col">دسته بندی</th>
              <th scope="col-1">ویرایش</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {currentPosts.map((post) => (
              <tr key={post.id}>
                <th scope="row"><img src={post.image} alt="pic" className="img-table"/></th>
                <td>{post.name}</td>
                <td>{post.category}</td>
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
  );
};
export default ProductsAdmin;
