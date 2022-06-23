import "./HistoryTableRowSeat.css";
import Seat from "./Seat.js";
import CheckButton from "./CheckButton";
const HistoryTableRowSeat = () => {
  return (
    <tr className="seat-row" style={{ backgroundColor: "#f9f9f9" }}>
      <td colSpan="5">
        <Seat />
        <CheckButton />
      </td>
    </tr>
  );
};

export default HistoryTableRowSeat;
