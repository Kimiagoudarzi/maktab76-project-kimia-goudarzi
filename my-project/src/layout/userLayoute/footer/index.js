import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from 'assets/images/logo.png';
import logo2 from 'assets/images/logoo2.png';
import logo3 from 'assets/images/logo3.png';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row d-flex ">
            <div className="col-sm-12 col-md-6">
              <h3>فروشگاه اینترنتی میا لند</h3>
              <p className="text-justify">
                معرفی و فروش آنلاین لوازم آرایشی و بهداشتی اصل در دسته بندی هایی
                از جمله انواع لوازم آرایش ( رژلب ؛ رژگونه ؛ کرم پودر ؛ رنگ مو و
                ریمل ؛ کانسیلر و انواع پاک کننده ها ) ؛ محصولات مراقبتی و زیبایی
                پوست ( شامپو ؛ کرم ضد آفتاب ؛ کرم آبرسان و مرطوب کننده ؛ کرم ضد
                چروک ؛ کرم دور چشم ؛ کرم روشن کننده ؛ ضد لک ) ؛ محصولات مراقبتی
                و زیبایی مو و بدن ( شامپو سر و بدن ؛ ژل بهداشتی ؛ بادی میلک ؛
                بادی باتر ؛ کرم دست و صورت ؛ برنزه کننده ؛ اسپری و ژل ضد تعریق ؛
                ژل و فوم اصلاح صورت و بدن ؛ تیغ اصلاح و افترشیو ؛ کرم و ژل موبر
                ) ؛ انواع شامپو ؛ اسپری و ژل مو ؛ کیت رنگ مو و انواع اکسیدان ؛
                حجم دهنده مو و انواع عطر و ادکلن ؛ لوازم شخصی برقی ( ماشین اصلاح
                و ریش تراش ؛ اپیلاتور و سشوار ) ؛ زیورآلات و اکسسوری مردانه و
                زنانه ( انواع بدلیجات ؛ انگشتر ؛ گردنبند و گوشواره ) ؛ محصولات
                مادر و کودک ( ضد ترک ؛ پودر بچه ؛ دستمال مرطوب کودک ؛ روغن بدن
                کودک ) در فروشگاه اینترنتی میا لند انجام می گردد. هدف فروشگاه
                اینترنتی میا لند از همان ابتدا در معرفی و فروش آنلاین محصولات
                آرایشی و بهداشتی اصل بوده است. خرید اینترنتی لوازم آرایش به صورت
                آنلاین از فروشگاه اینترنتی میا لند به راحت ترین شکل قابل انجام
                می باشد.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 img-f-wrapper">
              <img src={logo} alt="logo" className="img1-footer"/>
              <img src={logo2} alt="logo" className="img2-footer"/>
              <img src={logo3} alt="logo" className="img3-footer"/>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="/" className="link-footer-mia">
                  MiaLand
                </a>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://web.telegram.org/">
                    <FaTelegramPlane />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
