import { useEffect, useState } from "react";
import { apiFetch } from "../../../api.js";
import { stripHtml, truncateText } from "../../../helper.js";
import { Link } from "react-router-dom";
import "./Category.css";
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;


export default function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiFetch("home-category", {
      method: "get",
    }).then((res) => {
      if (res?.data) {
        setData(res.data);
      } else {
        console.error("No Category data found");
      }
    });
  }, []);


  return (
    <>
      <div className="dark">
        <div className="container">
          <div className="category-main">

            {data.length > 0 ? (
              data.map((item) => (
                <div className="category" key={item.id}>
                  <i className="fa-solid fa-address-card"></i>
                  <h1>{item.title || "Untitled Quiz"}</h1>
                  <p>
                    {item.content
                      ? truncateText(stripHtml(item.content), 300)
                      : "No description available."}
                  </p>

                  {item.video ? (
                    <div
                      className="videoWrapper"
                      dangerouslySetInnerHTML={{ __html: item.video }}
                    />
                  ) : (
                    <img src={`${IMAGE_BASE_URL}/homeImg/${item.img}`} alt={item.title} />
                  )}

                  <div className="btnGroup">
                    <Link to={`/quiz-list/${item.id}`} className="btn">Quiz Info</Link>
                    <button className="btn">Get Started</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading categories...</p>
            )}

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
