import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import "./tableprice.css";
import { EditText } from "react-edit-text";

const Prices = () => {
  const [posts, setPosts] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [newPrice, setNewPrice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // price
  const handleChange = (e, id) => {
    const idx = posts.findIndex((item) => item.id === id);
    const newPost = [...posts];
    newPost[idx].price = e.target.value;
    setPosts(newPost);
    const newPriceList = [...newPrice];
    const newIdx = newPrice.findIndex((item) => item.id === id);
    if (newIdx === -1) {
      const newObject = {
        id: id,
        newValPrice: e.target.value,
        newValStock: newPost[idx].stock,
      };
      newPriceList.push(newObject);
    } else {
      newPriceList[newIdx].newValPrice = e.target.value;
    }

    setNewPrice(newPriceList);
  };
  // Stock
  const handleChangeStock = (e, id) => {
    const idx = posts.findIndex((item) => item.id === id);
    const newPost = [...posts];
    newPost[idx].stock = e.target.value;
    setPosts(newPost);
    const newStockList = [...newPrice];
    const newIdx = newPrice.findIndex((item) => item.id === id);
    if (newIdx === -1) {
      const newObject = {
        id: id,
        newValPrice: newPost[idx].price,
        newValStock: e.target.value,
      };
      newStockList.push(newObject);
    } else {
      newStockList[newIdx].newValStock = e.target.value;
    }

    setNewPrice(newStockList);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    

    newPrice.forEach((element) => {
      try {
        let entiresData = {
          price: element.newValPrice,
          stock: element.newValStock,
        };
        axios
          .patch(`http://localhost:3002/products/${element.id}`, entiresData)
          .then(() => {
            fetchComments(currentPage);
          });
      } catch (error) {
        console.log("error!");
      }
    });
  };

  // pagination
  let limit = 15;

  const fetchComments = useCallback(
    async (currentPage) => {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3002/products?_page=${currentPage}&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));

      setPosts(data);
      setCurrentPage(currentPage);
      setLoading(false);
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
      <div className="price-admin-container">
        <NavBar />
        {loading ? (
          <div
            style={{
              position: "absolute",
              marginTop: "24rem",
              zIndex: "2",
              marginRight: "55.9rem",
            }}
          >
            <Spinner animation="border" style={{ color: "#FD2C7A" }} />
          </div>
        ) : (
          <>
            <div className="d-flex mt-5">
              <h1 className="h1-admin-price">مدیریت موجودی و قیمت ها </h1>
              <button
                className="btn-save-price"
                onClick={(e) => saveEdit(e, currentId)}
              >
                ذخیره
              </button>
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
                  {posts.map((post) => {
                    const { id } = post;
                    return (
                      <tr>
                        <th scope="row">{id}</th>
                        <td>{post.name}</td>
                        <td>
                          <EditText
                            value={
                              post?.price
                                ? post?.price
                                    .toString()
                                    .replace(/\./g, "")
                                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                                : null
                            }
                            onChange={(e) => handleChange(e, id)}
                          />
                        </td>
                        {post.stock !== 0 ? (
                          <td>
                            <EditText
                              value={post.stock}
                              onChange={(e) => handleChangeStock(e, id)}
                            />
                          </td>
                        ) : (
                          <td>
                            <EditText
                              value="0"
                              onChange={(e) => handleChangeStock(e, id)}
                            />
                          </td>
                        )}
                      </tr>
                    );
                  })}
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
          </>
        )}
      </div>
    </>
  );
};
export default Prices;
