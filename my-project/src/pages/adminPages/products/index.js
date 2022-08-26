import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import "./table.css";

const ProductsAdmin = () => {
  const [posts, setPosts] = useState([])
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
      `http://localhost:3002/products?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);
    setPosts(commentsFormServer);
  };

  return (
    <>
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
              {posts.map((post) => (
                <tr key={post.id}>
                  <th scope="row">
                    <img src={post.image} alt="pic" className="img-table" />
                  </th>
                  <td>{post.name}</td>
                  <td>{post.Grouping}</td>
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
        <ReactPaginate
          previousLabel={"قبلی"}
          nextLabel={"بعدی"}
          pageCount={pageCount}
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
export default ProductsAdmin;
