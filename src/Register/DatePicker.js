import { useEffect, useState } from "react";
import "./DatePicker.css";

const SERVER_URL = "http://localhost:3000";

const DatePicker = () => {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("06");
  const [day, setDay] = useState("22");
  const [hour, setHour] = useState("18");
  const [min, setMin] = useState("30");
  const [dateFormat, setDateFormat] = useState("");

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
          console.dir(e.data.message);
          const y = e.data.message.getFullYear();
          const mon = e.data.message.getMonth() + 1;
          const d = e.data.message.getUTCDate();
          const h = e.data.message.getHours();
          const m = e.data.message.getMinutes();
          console.log(y, mon, d, h, m);
          setYear(y);
          setMonth(mon);
          setDay(d);
          setHour(h);
          setMin(m);
          const strformat = `${year}-${month}-${day} ${hour}:${min}`;
          setDateFormat(dateFormat);
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
