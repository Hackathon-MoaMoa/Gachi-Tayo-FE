import { useEffect } from "react";
import "./DatePicker.css";

const SERVER_URL = "http://localhost:3000";

const DatePicker = () => {
  const iframePart = () => {
    return {
      __html: `<iframe src="/TimePicker/timepicker.html" width="600px" height="440px" frameborder=0 framespacing=0 marginheight=0 marginwidth=0 scrolling=no vspace=0 style='margin-bottom="500px"'></iframe>`,
    };
  };
  useEffect(() => {
    window.addEventListener(
      "message",
      (e) => {
        if (e.origin === SERVER_URL && e.data.message) {
          console.log(e.data.message);
        }
      },
      false
    );
  }, []);
  return (
    <div
      style={{
        margin: "auto",
        position: "relative",
        top: "164px",
        left: "700px",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      dangerouslySetInnerHTML={iframePart()}
    />
  );
};

export default DatePicker;
