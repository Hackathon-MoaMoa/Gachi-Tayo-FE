import { useEffect, useState } from "react";
import "./HistoryTableRow.css";
import HistoryTableRowSeat from "./HistoryTableRowSeat";

const HistoryTableRow = (props) => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(!visible);
  };
  const getTimeString = () => {
    const strArr = props.elem.startDate.split(" ");
    return strArr[1];
  };

  const getAMorPM = () => {
    const timeArr = getTimeString().split(":");
    if (parseInt(timeArr[0]) >= 12) return "PM";
    return "AM";
  };

  const getDateStrings = () => {
    const dateStr = props.elem.startDate.split(" ");
    return dateStr[0];
  };

  return (
    <>
      <tr onClick={onClick}>
        <td>{props.elem.startName}</td>
        <td>{props.elem.endName}</td>
        <td>{getDateStrings()}</td>
        <td>
          {getTimeString()}
          {getAMorPM()}
        </td>
        <td>{props.elem.userList.length}명</td>
      </tr>
      {visible ? <HistoryTableRowSeat /> : null}
    </>
  );
};

export default HistoryTableRow;
