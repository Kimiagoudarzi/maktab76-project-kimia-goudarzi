import loreal from "assets/images/loreal.webp";
import panten from "assets/images/panteneee.png";
import netro from "assets/images/netro.webp";
import esens from "assets/images/essenceee.webp";
import prime from "assets/images/primelogo.webp";
import lafarer from "assets/images/lafarrerrlogo.webp";
import Table from "react-bootstrap/Table";
import { BsStars } from "react-icons/bs";
import "./favBrand.css";

const HomeBrand = () => {
  return (
    <>
      <div className="home-brand-main">
        <div>
          <h2 className="like-title">
            <span className="star">
              <BsStars />
            </span>
            محبوب ترین برند ها
          </h2>
        </div>
        <Table className="like-table">
          <tbody>
            <tr>
              <td
                style={{
                  width: "180px",
                  height: "100px",
                }}
              >
                <img src={loreal} className="home-loreal" alt="logo" />
              </td>
              <td
                style={{
                  width: "180px",
                  height: "100px",
                }}
              >
                <img src={panten} className="home-panten" alt="logo" />
              </td>
              <td
                style={{
                  width: "180px",
                  height: "100px",
                }}
              >
                <img src={netro} className="home-netro" alt="logo" />
              </td>
              <td
                style={{
                  width: "180px",
                  height: "100px",
                }}
              >
                <img src={esens} className="home-esens" alt="logo" />
              </td>
              <td
                style={{
                  width: "180px",
                  height: "100px",
                }}
              >
                <img src={prime} className="home-prime" alt="logo" />
              </td>
              <td
                style={{
                  width: "180px",
                  height: "100px",
                }}
              >
                <img src={lafarer} className="home-lafarer" alt="logo" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HomeBrand;
