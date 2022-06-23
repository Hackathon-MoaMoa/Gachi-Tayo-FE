import "./CheckButton.css";

const CheckButton = () => {
  return (
    <div className="checkButton">
      <div className="radioButtonGroup">
        <label>
          <div className="radioText">별로에요</div>
          <input className="radioButton" type="radio" name="check" id="bad" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="radioButtonGroup">
        <label>
          <div className="radioText">보통이에요</div>
          <input className="radioButton" type="radio" name="check" id="mid" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="radioButtonGroup">
        <label>
          <div className="radioText">좋아요</div>
          <input className="radioButton" type="radio" name="check" id="good" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default CheckButton;
