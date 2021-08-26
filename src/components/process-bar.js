import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ProgressBarStyled } from "../styles/skill";

const ProcessBar = () => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    console.log(progressBar);
  });

  const increamentProgressbar = () => {
    if (progressBar < 100) {
      setProgressBar(progressBar + 10);
    } else return console.log("Full");
  };

  const decreamentProgressBar = () => {
    if (progressBar > 0) {
      setProgressBar(progressBar - 10);
    } else return console.log("Zero");
  };

  return (
    <React.Fragment>
      <ProgressBarStyled animated now={progressBar} />
      <hr />
      <div>
        <Button onClick={decreamentProgressBar}>
          <AiOutlineMinus />
        </Button>{" "}
        <Button onClick={increamentProgressbar}>
          <AiOutlinePlus />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ProcessBar;
