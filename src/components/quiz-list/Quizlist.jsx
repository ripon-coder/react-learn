import "./Quizlist.css";
import manImg from "../../assets/man.jpg";
export default function Quizlist() {
  return (
    <>
      <div className="dark">
        <div className="container">
          <div className="main-quiz-list">
            <h1>General Quiz Competiotion</h1>
            <img src={manImg} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              inventore commodi libero possimus, cumque aliquam nisi rem debitis
              dolores nostrum dolorum molestias dolore atque, temporibus vitae
              quisquam ipsa voluptatem ab. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat optio dolorum, dolorem
              dignissimos, voluptatibus alias corporis ex cum quam modi pariatur
              officia perferendis laudantium vel, magnam aliquid mollitia
              maiores quos.
            </p>
          </div>
          <div className="finish-quiz-list">
            <h2>Recent Finished Quiz</h2>
            <div className="main-each-finish-quiz">
              <div className="each-finish-quiz">
                <img src={manImg} />
                <h2>Upcomming General Quiz 1</h2>
                <ul>
                  <li>Quiz Play Time</li>
                  <li>Total Prize Money</li>
                </ul>
              </div>
              <div className="each-finish-quiz">
                <img src={manImg} />
                <h2>Upcomming General Quiz 1</h2>
                <ul>
                  <li>Quiz Play Time</li>
                  <li>Total Prize Money</li>
                </ul>
              </div>
              <div className="each-finish-quiz">
                <img src={manImg} />
                <h2>Upcomming General Quiz 1</h2>
                <ul>
                  <li>Quiz Play Time</li>
                  <li>Total Prize Money</li>
                </ul>
              </div>
              <div className="each-finish-quiz">
                <img src={manImg} />
                <h2>Upcomming General Quiz 1</h2>
                <ul>
                  <li>Quiz Play Time</li>
                  <li>Total Prize Money</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
