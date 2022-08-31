import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import NavBar from "layout/adminLayout/navbar";
import wave from "assets/images/wave.png";
import axios from "axios";
import "./tableprice.css";
import { EditText } from "react-edit-text";

const Prices = () => {
  const [posts, setPosts] = useState([]);
  const [product, setProduct] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [newPrice, setNewPrice] = useState();
  const [newStock, setNewStock] = useState();

 
  const saveEdit = (e) => {
    e.preventDefault();
    try {
      let entiresData = {
        price: newPrice,
        stock: newStock,
      };
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      axios
        .post(`http://localhost:3002/products`, entiresData, { headers })
        .then(() => {
          setProduct((PrevState) => [...PrevState, entiresData]);
        });
    } catch (error) {
      console.log("error!");
    }
  };

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
      <div className="price-admin-container">
        <NavBar />
        <div className="d-flex mt-5">
          <h1 className="h1-admin-price">مدیریت موجودی و قیمت ها </h1>
          <button className="btn-save-price" onClick={saveEdit}>
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
              {posts.map((post) => (
                <tr>
                  <th scope="row">{post.id}</th>
                  <td>{post.name}</td>
                  <td>
                    <EditText
                      defaultValue={post.price}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />
                  </td>
                  <td>
                    <EditText
                      defaultValue={post.stock}
                      onChange={(e) => setNewStock(e.target.value)}
                    />
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
export default Prices;
