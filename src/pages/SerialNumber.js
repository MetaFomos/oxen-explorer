import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SerialNumber = () => {
  const { snID } = useParams();
  const [content, setContent] = useState("");

  const init = async () => {
    const res = await axios.get("https://oxen.observer/sn/" + snID);
    let response = res.data;
    response = response.split("Oxen").join("Selam").split("OXEN").join("SELAM");

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

export default SerialNumber;
