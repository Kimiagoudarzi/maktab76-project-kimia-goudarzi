import "./HomeCard.css";
import { Link } from "react-router-dom";
import cosmetic from "../../../../assets/images/1card.jpg";
import cream from "../../../../assets/images/2card.jpg";
import body from "../../../../assets/images/3card.jpg";
import Hair from "../../../../assets/images/4card.jpg";
const HomeCard = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="row d-flex justify-content-center">
          <div className="col-4 ">
            <Link to="/Cosmetic">
              <div className="card">
                <div className="image">
                  <img src={cosmetic} alt="pic" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/perfume">
              <div className="card">
                <div className="image">
                  <img src={cream} alt="pic" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <Link to='/hair'>
            <div className="card">
              <div className="image">
                <img src={Hair} alt="pic" />
              </div>
            </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to='/skin'>
            <div className="card">
              <div className="image">
                <img src={body} alt="pic" />
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
