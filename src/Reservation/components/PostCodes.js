import React, { useEffect, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import "./PostCodes.css";

const PostCode = (props) => {
  const scriptUrl =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);
  let [roadAdd, setRoadAdd] = useState(props.selectAddress.roadAddress);
  let [buildName, setBuildName] = useState(props.selectAddress.buildingName);

  const handleComplete = (data) => {
    if (data.addressType === "R") {
      setRoadAdd(data.roadAddress);
      if (data.buildingName !== "") {
        setBuildName(data.buildingName);
      } else {
        setBuildName("건물 명");
      }
    }
  };

  useEffect(() => {
    props.setAddress({
      roadAddress: roadAdd,
      buildingName: buildName,
    });
  }, [roadAdd, buildName]);

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div className='post-code' onClick={handleClick}>
      <div className='road-address'>{roadAdd}</div>
      <div className='building-name'>{buildName}</div>
    </div>
  );
};

export default PostCode;
