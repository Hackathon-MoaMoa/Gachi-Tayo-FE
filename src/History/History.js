import HistoryTable from "./HistoryTable";
import "./History.css";

const History = () => {
  return (
    <div className="history-main">
      <div className="history-title">
        평가 대기중인 <span className="history-title-thin">작성한 글 (2)</span>
      </div>
      <HistoryTable />
      <div
        style={{
          borderBottom: "1px solid",
          borderColor: "#d9d9d9",
          width: "100%",
          paddingTop: "3rem",
        }}
      ></div>
      <div className="history-title">
        평가 대기중인 <span className="history-title-thin">예약한 글 (1)</span>
      </div>
      <HistoryTable />
      <div
        style={{
          borderBottom: "1px solid",
          borderColor: "#d9d9d9",
          width: "100%",
          marginBottom: "75px",
          paddingTop: "3rem",
        }}
      ></div>
    </div>
  );
};

export default History;
