import HistoryTableRow from "./HistoryTableRow";
import HistoryTableRowSeat from "./HistoryTableRowSeat";
import "./HistoryTable.css";
import { useEffect, useState } from "react";

const HistoryTable = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {});

  return (
    <div className='table-wapper'>
      <table>
        <thead className='table-row'>
          <tr>
            <th>출발지</th>
            <th>도착지</th>
            <th>출발 일자</th>
            <th>출발 시각</th>
            <th>인원</th>
          </tr>
        </thead>
        <tbody>
          <HistoryTableRow visible={visible} setVisible={setVisible} />
          {visible && <HistoryTableRowSeat />}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
