import { useEffect } from "react";
import "./HistoryTableRow.css";

const HistoryTableRow = (props) => {
  const onClick = () => {
    props.setVisible(!props.visible);
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
    const dateStr = props.elem.startDate.split(" ")[0];
    const newStr = dateStr.replace(/-/gi, ".");
    return newStr;
  };
  return (
    <tr onClick={onClick}>
      <td>{props.elem.startName}</td>
      <td>{props.elem.endName}</td>
      <td>2022.06.03</td>
      <td>
        {getTimeString()}
        {getAMorPM()}
      </td>
      <td>{props.elem.userList.length}명</td>
    </tr>
  );
};

export default HistoryTableRow;
