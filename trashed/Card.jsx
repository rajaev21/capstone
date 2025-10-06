import { generatePDF } from "../my-react/src/components/pdf";

function Card() {
  return (
    <>
      <div id="card">
        <h4 className="title">User Identity</h4>
        <div className="content">
          <div className="left-column">
            <div className="label">
              <span>FirstName:</span>
              <span>Badman</span>
            </div>
            <div className="label">
              <span>LastName:</span>
              <span>Reeeeeeal</span>
            </div>
            <div className="label">
              <span>Profession:</span>
              <span>Hustle</span>
            </div>
            <div className="label">
              <span>Heigt:</span>
              <span>178cm</span>
            </div>
          </div>

          <div className="right-column">
            <img src="" alt="profile" />
          </div>
        </div>
      </div>
      <div className="root-container">
        <div className="root-container-first-child">
          <button className="button" onClick={() => generatePDF("card")}>
            Generate Card PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
