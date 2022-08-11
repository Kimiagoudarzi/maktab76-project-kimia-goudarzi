import "./HomeCard.css";
import cosmetic from "../../../images/1card.jpg";
import cream from "../../../images/2card.jpg";
import body from "../../../images/3card.jpg";
import Hair from "../../../images/5card.jpg";
const HomeCard = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="row d-flex justify-content-center">
          <div className="col-4 ">
            <div className="card">
              <div className="image">
                <img src={cosmetic} alt="pic" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="image">
                <img src={cream} alt="pic" />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <div className="card">
              <div className="image">
                <img src={Hair} alt="pic" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="image">
                <img src={body} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
