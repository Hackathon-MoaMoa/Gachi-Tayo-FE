import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import "./PostCode.css";

const PostCode = (props) => {
  const scriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);
  let [roadAddress, setRoadAddress] = useState(props.selectAddress.roadAddress);
  let [buildingName, setBuildingName] = useState(
    props.selectAddress.buildingName
  );

  const handleComplete = (data) => {
    if (data.addressType === "R") {
      if (data.buildingName !== "") {
        setRoadAddress(data.roadAddress);
        setBuildingName(data.buildingName);
        props.setAddressInfo(roadAddress, buildingName, props.setFunc);
      }
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div className='post-code' onClick={handleClick}>
      <div className='road-address'>{roadAddress}</div>
      <div className='building-name'>{buildingName}</div>
    </div>
  );
};

export default PostCode;
