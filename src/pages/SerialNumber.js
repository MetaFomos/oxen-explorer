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
    const remove1 = response.split(`/qr/${snID}`);
    response = `${remove1[0]}https://oxen.observer/qr/${snID}${remove1[1]}`;
    response = response
      .split(`<a href="/checkpoint_quorum/`)
      .join(`<span href="/checkpoint_quorum/`)
      .split("Source Code")
      .join("")
      .split("| Explorer Revision: d92abf692")
      .join("")
      .split("| Selam Version: 10.3.0-1~deb11")
      .join("");

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
