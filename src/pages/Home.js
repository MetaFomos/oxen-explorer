import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [content, setContent] = useState("");

  const init = async () => {
    console.log("document loaded");
    const res = await axios.get("https://oxen.observer/");
    let response = res.data;
    response = response.split("Oxen").join("Selam").split("OXEN").join("SELAM");

    console.log(response.indexOf("Server Time"));
    const remove1 = response.split("Server Time");
    const remove2 = remove1[1].split("minus any portion that was burned.");

    let new1 = [remove1[0], remove2[1]].join();
    const remove3 = new1.split(
      `<h1 style="margin-bottom: 0px">Service Nodes</h1>`
    );
    const remove4 = remove3[1].split("Last 3 checkpoints");
    let new2 = [remove3[0], `Last 3 checkpoints` + remove4[1]].join();
    setContent(new2);
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

export default HomePage;
