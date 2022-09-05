import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaTrash } from "react-icons/fa";
import {Link} from "react-router-dom"
import NavBar from "layout/userLayoute/navbar/index";
import butter from "assets/images/imagecart/buterr2.png";
import "./cartStyle.css";

const Cart = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="table-main-cart">
        <MDBTable bordered style={{ borderColor: "#521850" }}>
          <MDBTableHead>
            <tr>
              <th scope="col">نام کالا</th>
              <th scope="col">قیمت</th>
              <th scope="col">تعداد</th>
              <th scope="col">ویرایش</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td style={{ width: "11rem" }}>
                <button className="btn-icon">
                  <FaTrash className="delete-cart-icon" />
                </button>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <p className="text-price-cart">جمع : 120,000 تومان</p>
        </div>
        <div>
          <Link to="/cart/finalize">
            <button className="nahyii-cart">نهایی کردن سبد خرید</button>
          </Link>
        </div>
      </div>
      <img src={butter} alt="pic3" style={{ marginRight: "1.2rem" }} />
    </>
  );
};
export default Cart;
