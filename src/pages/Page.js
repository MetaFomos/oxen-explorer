import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Page = () => {
  const { pgnum, perpage } = useParams();
  const [content, setContent] = useState("");

  const init = async () => {
    const res = await axios.get(
      "https://oxen.observer/page/" + pgnum + "/" + perpage
    );
    let response = res.data;
    response = response.split("Oxen").join("Selam").split("OXEN").join("SELAM");

    console.log(response.indexOf("Server Time"));
    const remove1 = response.split("Server Time");
    const remove2 = remove1[1].split("minus any portion that was burned.");

    let new1 = [remove1[0], remove2[1]].join("");
    new1 = new1
      .split(`<a href="/checkpoint_quorum/`)
      .join(`<span href="/checkpoint_quorum/`)
      .split("Source Code")
      .join("")
      .split("| Explorer Revision: d92abf692")
      .join("")
      .split("| Selam Version: 10.3.0-1~deb11")
      .join("");
    setContent(new1);
  };
  useEffect(() => {
    if (pgnum || perpage) {
      init();
    }
  }, [pgnum, perpage]);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default Page;
