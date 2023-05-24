import React, { useEffect, useState } from "react";
import axios from "axios";

const Quorums = () => {
  const [content, setContent] = useState("");

  const init = async () => {
    const res = await axios.get("https://oxen.observer/quorums");
    let response = res.data;
    console.log(response);
    response = response.split("Oxen").join("Selam").split("OXEN").join("SELAM");

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
