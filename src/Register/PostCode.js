import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

const PostCode = (props) => {
  const scriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);
  let roadAddress = props.selectAddress.roadAddress;
  let buildingName = props.selectAddress.buildingName;

  const handleComplete = (data) => {
    if (data.addressType === "R") {
      if (data.buildingName !== "") {
        roadAddress = data.roadAddress;
        buildingName = data.buildingName;
        props.setAddressInfo(roadAddress, buildingName, props.setFunc);
      }
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div>
      <button type='button' onClick={handleClick}>
        Open
      </button>
    </div>
  );
};

export default PostCode;
