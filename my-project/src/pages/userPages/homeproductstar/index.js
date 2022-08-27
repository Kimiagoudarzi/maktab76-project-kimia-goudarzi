import { Link } from "react-router-dom"
import Table from "react-bootstrap/Table";
import mask from "assets/images/home image card/mask.png";
import consiler from "assets/images/home image card/consiler.png";
import bodySplash from "assets/images/home image card/One.png";
import lip from "assets/images/home image card/lip.png";
import palet from "assets/images/home image card/palet.png";
import coco from "assets/images/home image card/coco.png";
import cerita from "assets/images/home image card/cerita.png";
import mac from "assets/images/home image card/mac.png";
import poder from "assets/images/home image card/podreflormar.png";
import dior from "assets/images/home image card/dior.png";
import prim from "assets/images/home image card/prim.png";
import argan from "assets/images/home image card/argan.png";
import circle from "assets/images/home image card/circles2.png";
import "./style.css";

const productStar = () => {
  return (
    <>
      <div className="d-flex main-title-pishnahad">
        <div className="line-pink"><h1>_____________________________</h1></div>
        <h3 className="suggest-title">پیشنهاد میا لند</h3>
        <div className="line-pink"><h1>_____________________________</h1></div>
      </div>
      <Table bordered className="suggest-table">
        <tbody>
          <tr>
            
            <td
              style={{
                width: "160px",
                height: "170px",
              }}
            >
              <Link to="/skin" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={mask} className="home-mask" alt="pic" />
              <p className="home-mask-title">ماسک</p>
              </Link>
            </td>
            
            
            <td
              style={{
                width: "160px",
                height: "170px",
              }}
            >
              <Link to="/cosmetic" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={consiler} className="home-cosniler" alt="pic" />
              <p className="home-cosniler-title">کانسیلر</p>
              </Link>
            </td>
            
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/perfume" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={bodySplash} className="home-body" alt="pic" />
              <p className="home-body-title">بادی اسپلش</p>
              </Link>
            </td>
            
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/cosmetic" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={lip} className="home-lip" alt="pic" />
              <p className="home-lip-title">رژ لب این لی</p>
              </Link>
            </td>
            
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/cosmetic" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={palet} className="home-palet" alt="pic" />
              <p className="home-palet-title">پلت سایه هدی بیوتی</p>
              </Link>
            </td>
           
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/perfume" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={coco} className="home-coco" alt="pic" />
              <p className="home-coco-title">عطر زنانه شنل</p>
              </Link>
            </td>
            
          </tr>
          
          <tr>
          
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/hair" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={cerita} className="home-cerita" alt="pic" />
              <p className="home-cerita-title">سرم موی دو فاز سریتا</p>
              </Link>
            </td>
            
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/cosmetic" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={mac} className="home-mac" alt="pic" />
              <p className="home-mac-title">ست براش مک</p>
              </Link>
            </td>
            
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/cosmetic" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={poder} className="home-poder" alt="pic" />
              <p className="home-poder-title">پودر فیکس فلور مار</p>
              </Link>
            </td>
           
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/perfume" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={dior} className="home-dior" alt="pic" />
              <p className="home-dior-title">عطر زنانه دیور</p>
              </Link>
            </td>
            
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/hair" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={argan} className="home-argan" alt="pic" />
              <p className="home-argan-title">روغن آرگان</p>
              </Link>
            </td>
        
            
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <Link to="/skin" className="link-p">
              <img src={circle} className="home-circles2" alt="pic" />
              <img src={prim} className="home-prim" alt="pic" />
              <p className="home-prim-title">کرم ضد آفتاب</p>
              </Link>
            </td>
            
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default productStar;
