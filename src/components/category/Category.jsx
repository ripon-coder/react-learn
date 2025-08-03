import { Link } from "react-router-dom";
import "./Category.css";
import manImg from "../../assets/man.jpg";
export default function Category() {
  return (
    <>
      <div className="dark">
        <div className="container">
          <div className="category-main">
            <div className="category">
              <i class="fa-solid fa-address-card"></i>
              <h1>General Quiz Competition</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the
              </p>
              <img src={manImg} />
              <div className="btnGroup">
                <button className="btn"><Link to="/quiz-list/4">Quiz Info</Link></button>
                <button className="btn">Get Started</button>
              </div>
            </div>
            <div className="category">
              <i class="fa-solid fa-address-card"></i>
              <h1>General Quiz Competition</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the
              </p>
              <img src={manImg} />
              <div className="btnGroup">
                <button className="btn">Quiz Info</button>
                <button className="btn">Get Started</button>
              </div>
            </div>
            <div className="category">
              <i class="fa-solid fa-address-card"></i>
              <h1>General Quiz Competition</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the
              </p>
              <img src={manImg} />
              <div className="btnGroup">
                <button className="btn">Quiz Info</button>
                <button className="btn">Get Started</button>
              </div>
            </div>
            <div className="category">
              <i class="fa-solid fa-address-card"></i>
              <h1>General Quiz Competition</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the
              </p>
              <img src={manImg} />
              <div className="btnGroup">
                <button className="btn">Quiz Info</button>
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>
          <div className="btnlist">
            <button>All ongoing Quiz</button>
            <button>Upcoming quiz</button>
          </div>
        </div>
      </div>
    </>
  );
}
