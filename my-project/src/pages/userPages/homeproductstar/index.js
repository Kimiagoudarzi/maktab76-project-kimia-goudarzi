import React from 'react'
import Table from "react-bootstrap/Table";
import "./style.css";

const productStar = () => {
  return (
    <>
        <h4 className="suggest-title">پیشنهاد رناتو استور</h4>
      <Table bordered className="suggest-table">
        <tbody>
          <tr>
            <td
              style={{
                width: "160px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-phone2" alt="pic" />
              <p className="home-phone2-title">موبایل</p>
            </td>
            <td
              style={{
                width: "160px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-laptop2" alt="pic" />
              <p className="home-laptop2-title">لپتاپ</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-console" alt="pic" />
              <p className="home-console-title">کنسول خانگی</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-handsfree" alt="pic" />
              <p className="home-handsfree-title">هدفون</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-watch2" alt="pic" />
              <p className="home-watch2-title">ساعت</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-cover" alt="pic" />
              <p className="home-cover-title">کیف و کاور گوشی</p>
            </td>
          </tr>
          <tr>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-powerbank" alt="pic" />
              <p className="home-powerbank-title">پاوربانک</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-real" alt="pic" />
              <p className="home-real-title">واقعیت مجازی</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-camera2" alt="pic" />
              <p className="home-camera2-title">دوربین</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-tablet2" alt="pic" />
              <p className="home-tablet2-title">تبلت</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-hard" alt="pic" />
              <p className="home-hard-title">هارد اکسترنال</p>
            </td>
            <td
              style={{
                width: "180px",
                height: "170px",
              }}
            >
              <img className="home-circles2" alt="pic" />
              <img className="home-band" alt="pic" />
              <p className="home-band-title">اسپیکر</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default productStar