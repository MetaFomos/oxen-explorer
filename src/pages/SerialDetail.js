import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SerialDetail = () => {
  const { snID } = useParams();
  const [content, setContent] = useState("");

  const init = async () => {
    const res = await axios.get(
      "https://oxen.observer/sn/" + snID + "/1#more_details"
    );
    let response = res.data;
    response = response.split("Oxen").join("Selam").split("OXEN").join("SELAM");
    const remove1 = response.split(`/qr/${snID}`);
    response = `${remove1[0]}https://oxen.observer/qr/${snID}${remove1[1]}`;

    setContent(response);
  };
  useEffect(() => {
    if (snID) {
      init();
    }
  }, [snID]);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default SerialDetail;
