import { useEffect, useState } from "react";
import { apiFetch } from "../../../api.js";
import "./Quizlist.css";
import manImg from "../../assets/man.jpg";
import { useParams } from "react-router-dom";
import {
  stripHtml,
  truncateText,
  formatDateToDDMMYYYY,
} from "../../../helper.js";
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
export default function Quizlist() {
  const { id } = useParams();
  const [data, setData] = useState({ content: [] });

  useEffect(() => {
    apiFetch("content?id=" + id, {
      method: "get",
      // body: JSON.stringify({ id: id }),
    }).then((res) => {
      if (res?.data) {
        console.log(res.data);
        setData(res.data);
      } else {
        console.error("No quizlist data found");
      }
    });
  }, [id]); // Add id as a dependency

  return (
    <>
      <div className="dark">
        <div className="container">
          {data.content.length > 0 ? (
            <div className="main-quiz-list">
              <h1>{data.content[0].title}</h1>
              <img src={`${IMAGE_BASE_URL}/homeImg/${data.content[0].img}`} />
              <p>{data.content[0].content}</p>
            </div>
          ) : (
            <div style={{ height: "448px" }} className="parentLoader">
              <div style={{ height: "448px" }} className="loaderSlider">
                <div className="loader-spinner"></div>
              </div>
            </div>
          )}

          <div className="finish-quiz-list">
            <h2>Recent Finished Quiz</h2>
            <div className="main-each-finish-quiz">
              {data.recent_finish?.length > 0 ? (
                data.recent_finish.map((item) => (
                  <div key={item.id} className="each-finish-quiz">
                    {data.content[0].video ? (
                      <div
                        className="videoWrapper"
                        dangerouslySetInnerHTML={{
                          __html: data.content[0].video,
                        }}
                      />
                    ) : (
                      <img
                        src={`${IMAGE_BASE_URL}/homeImg/${data.content[0].img}`}
                        alt={item.title}
                      />
                    )}
                    <h2>{item.title}</h2>
                    <ul className="specification_quizlist">
                      <li className="firstChild_quizlist">
                        Quiz Play Time :
                        <span>
                          {" "}
                          {formatDateToDDMMYYYY(item.start_date)} -{" "}
                          {formatDateToDDMMYYYY(item.end_date)}&nbsp;
                          {item.end_time}
                        </span>
                      </li>
                      <li>
                        Total Prize Money : <span>${item.price}</span>
                      </li>
                      <li>
                        Total Winner : <span>{item.person}</span>
                      </li>
                      <li>
                        1<sup>st</sup> Top Scorrer Will Get :{" "}
                        <span>${item.first_top_money}</span>
                      </li>
                      <li>
                        2<sup>nd</sup> Top Scorrer Will Get :{" "}
                        <span>${item.second_top_money}</span>
                      </li>
                      <li>
                        3<sup>rd</sup> Top Scorrer Will Get :{" "}
                        <span>${item.third_top_money}</span>
                      </li>
                      <li>
                        Total Question : <span>{item.total_quistion}</span>
                      </li>
                      <li>
                        Every Question Mark : <span>{item.mark}</span>
                      </li>
                    </ul>
                  </div>
                ))
              ) : (
                <div style={{ height: "300px" }} className="parentLoader">
                  <span className="loader"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
