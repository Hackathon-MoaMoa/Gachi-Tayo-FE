import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

const PostCode = () => {
  const scriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);
  const [roadAddress, setRoadAddress] = useState("도로명 주소");
  const [buildingName, setBuildingName] = useState("빌딩 이름");

  const handleComplete = (data) => {
    setRoadAddress(data.roadAddress);

    if (data.addressType === "R") {
      if (data.buildingName !== "") {
        setBuildingName(data.buildingName);
      }
    }

    console.log(buildingName, roadAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div>
      <p>도로명주소 : {roadAddress}</p>
      <p>도착지 : {buildingName} </p>
      <button type='button' onClick={handleClick}>
        Open
      </button>
    </div>
  );
};

export default PostCode;
