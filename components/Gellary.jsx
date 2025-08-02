import { useEffect, useRef, useState } from "react";

export default function Gellary() {
  const images = [
    "https://picsum.photos/id/1011/300/200",
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1021/300/200",
    "https://picsum.photos/id/1025/300/200",
    "https://picsum.photos/id/1035/300/200",
  ];
  const [index, setIndex] = useState(null);
  const [isPlay, setIsPlay] = useState(true);

  const intervalRef = useRef(null);
  useEffect(() => {
    if (index === null || !isPlay) return;

    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex >= images.length - 1 ? 0 : prevIndex + 1;
        return nextIndex;
      });
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [index, isPlay]);

  function handleClick(i) {
    setIndex(i);
  }
  function pauseInterval() {
    setIsPlay((prev) => !prev);
  }
  return (
    <>
      <div className="container">
        <div className="img_gallary">
          {images.map((img, i) => (
            <img
              key={i}
              onClick={() => handleClick(i)}
              src={img}
              alt="my-img"
            />
          ))}
        </div>
        <h1>Index: {index}</h1>
      </div>
      {index !== null && (
        <div className="preview">
          {index > 0 && (
            <span className="leftIcon" onClick={() => setIndex(index - 1)}>
              ⏪
            </span>
          )}
          <div className="inner-preview">
            <span className="closeImg" onClick={() => setIndex(null)}>
              ❌
            </span>
            <img src={images[index]} alt="preview img" />
          </div>

          {index < images.length - 1 && (
            <span className="rightIcon" onClick={() => setIndex(index + 1)}>
              ⏩
            </span>
          )}
          <button style={{ cursor: "pointer" }} onClick={() => pauseInterval()}>
            {isPlay ? "Pause" : "Play"}
          </button>
        </div>
      )}
    </>
  );
}
