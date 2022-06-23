import { useEffect } from "react";
import "./HistoryTableRow.css";

const HistoryTableRow = (props) => {
  const onClick = () => {
    props.setVisible(!props.visible);
  };
  return (
    <tr onClick={onClick}>
      <td>전남대학교</td>
      <td>조선대학교</td>
      <td>2022.06.01</td>
      <td>15:30 PM</td>
      <td>3명</td>
    </tr>
  );
};

export default HistoryTableRow;
