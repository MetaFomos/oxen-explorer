import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Block = () => {
  const { blockID } = useParams();
  const [content, setContent] = useState("");

  const init = async () => {
    const res = await axios.get("https://oxen.observer/block/" + blockID);
    let response = res.data;
    response = response.split("Oxen").join("Selam").split("OXEN").join("SELAM");

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
    if (blockID) {
      init();
    }
  }, [blockID]);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default Block;
