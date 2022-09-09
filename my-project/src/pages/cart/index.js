import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, removeFromCart } from "redux/features/cart/CartSlice";
import { useEffect } from "react";
import NavBar from "layout/userLayoute/navbar/index";
import butter from "assets/images/imagecart/buterr2.png";
import emptyImage from "assets/images/emptyImage.jpg"
import "./cartStyle.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleDeleteCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      {cart.cartItems.length === 0 ? (
        <div className="empty">
          <img src={emptyImage} className="empty-sabad" />
          <p className="empty-title">سبد خرید شما خالی است!</p>
        </div>
      ) : (
        <>
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
                {cart.cartItems.map((item) => (
                  <tr key={item.id}>
                    <th>{item.name}</th>
                    <td>
                      {item.price
                        ? item?.price
                            .toString()
                            .replace(/\./g, "")
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                        : null}
                    </td>
                    <td>{item.entity}</td>
                    <td style={{ width: "11rem" }}>
                      <button className="btn-icon">
                        <FaTrash
                          className="delete-cart-icon"
                          onClick={() => handleDeleteCart(item)}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>

          <div className="d-flex justify-content-around">
            <div>
              <p className="text-price-cart">
                جمع : {cart.cartTotalAmount}تومان
              </p>
            </div>
            <div>
              <Link to="/cart/finalize">
                <button className="nahyii-cart">نهایی کردن سبد خرید</button>
              </Link>
            </div>
          </div>
          <img src={butter} alt="pic3" style={{ marginRight: "1.2rem" }} />
        </>
      )}

      
    </>
  );
};
export default Cart;
