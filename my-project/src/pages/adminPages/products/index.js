import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import ReactPaginate from "react-paginate";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import "./table.css";

const ProductsAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleDeleteClose = () => setDeleteShow(false);

  const [addShow, setAddShow] = useState(false);
  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

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
          <button className="btn-add-product" onClick={handleAddShow}>
            افزودن کالا
          </button>
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
                  <td style={{ width: "15rem" }}>{post.Grouping}</td>
                  <td style={{ width: "11rem" }}>
                    <button className="btn-icon">
                      <FaPenSquare
                        className="edit-icon-admin"
                        onClick={handleEditShow}
                      />
                    </button>
                    <button className="btn-icon">
                      <FaTrash
                        className="trash-icon-admin"
                        onClick={handleDeleteShow}
                      />
                    </button>
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

      {/* Modal Add */}
      <AddModal addShow={addShow} handleAddClose={handleAddClose} />

      {/* Modal Edit */}
      <EditModal editShow={editShow} handleEditClose={handleEditClose} />

      {/* Modal Delete */}
      <DeleteModal deleteShow={deleteShow} handleDeleteClose={handleDeleteClose}/>
    </>
  );
};
export default ProductsAdmin;
