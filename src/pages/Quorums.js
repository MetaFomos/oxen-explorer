import React, { useEffect, useState } from "react";
import axios from "axios";

const Quorums = () => {
  const [content, setContent] = useState("");

  const init = async () => {
    const res = await axios.get("https://oxen.observer/quorums");
    let response = res.data;
    console.log(response);
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
    init();
  }, []);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default Quorums;
