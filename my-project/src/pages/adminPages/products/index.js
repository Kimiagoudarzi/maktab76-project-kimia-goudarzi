import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import ReactPaginate from "react-paginate";
import NavBar from "layout/adminLayout/navbar";

import "./table.css";

const ProductsAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentId, setCurrentId] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteShow = (id) => {
    setCurrentId(id);
    setDeleteShow(true);
  };
  const handleDeleteClose = () => setDeleteShow(false);

  const [addShow, setAddShow] = useState(false);
  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (id) => {
    setCurrentId(id);
    setEditShow(true);
  };

  // pagination
  let limit = 15;

  const fetchComments = useCallback(
    async (currentPage) => {
      const res = await fetch(
        `http://localhost:3002/products?_page=${currentPage}&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));
      setPosts(data);
      setCurrentPage(currentPage);
    },
    [limit]
  );

  useEffect(() => {
    fetchComments(1);
  }, [fetchComments]);

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    fetchComments(currentPage);
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
                    <img
                      src={
                        post.image
                          ? `http://localhost:3002/files/${post?.image[0]}`
                          : "-"
                      }
                      alt="pic"
                      className="img-table"
                    />
                  </th>
                  <td>{post.name}</td>
                  <td style={{ width: "15rem" }}>{post?.Grouping ?? "-"}</td>
                  <td style={{ width: "11rem" }}>
                    <button className="btn-icon">
                      <FaPenSquare
                        className="edit-icon-admin"
                        onClick={() => handleEditShow(post.id)}
                      />
                    </button>
                    <button className="btn-icon">
                      <FaTrash
                        className="trash-icon-admin"
                        onClick={() => handleDeleteShow(post.id)}
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

      {/* Modal Add */}
      <AddModal
        addShow={addShow}
        handleAddClose={handleAddClose}
        fetchComments={fetchComments}
        currentPage={currentPage}
      />

      {/* Modal Edit */}
      <EditModal
        editShow={editShow}
        handleEditClose={handleEditClose}
        id={currentId}
        posts={posts}
        fetchComments={fetchComments}
        currentPage={currentPage}
      />

      {/* Modal Delete */}
      <DeleteModal
        deleteShow={deleteShow}
        handleDeleteClose={handleDeleteClose}
        id={currentId}
        fetchComments={fetchComments}
        currentPage={currentPage}
      />
    </>
  );
};
export default ProductsAdmin;
