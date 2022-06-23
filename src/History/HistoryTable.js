import HistoryTableRow from "./HistoryTableRow";
import HistoryTableRowSeat from "./HistoryTableRowSeat";
import "./HistoryTable.css";
import { useEffect, useState } from "react";

const HistoryTable = (props) => {
  const [renderArray, setRenderArray] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pArr = props.rideArray;
    console.log(pArr);
    setRenderArray(pArr);
    console.log("renderArray:", renderArray);
  }, []);

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
          {renderArray.map((e) => {
            return (
              <HistoryTableRow
                visible={visible}
                setVisible={setVisible}
                elem={e}
                index
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
